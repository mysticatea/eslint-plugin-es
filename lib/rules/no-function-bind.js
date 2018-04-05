/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const anyFunctionPattern = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/

/**
 * Get property name.
 * @param  {ASTNode} node MemberExpression node
 * @returns {string} name
 */
function getPropertyName(node) {
    if (!node.computed) {
        return node.property.name
    } else if (node.property.type === "Literal") {
        return node.property.value
    }
    return null
}

/**
 * Checks whether a given node is a function node or not.
 * The following types are function nodes:
 *
 * - ArrowFunctionExpression
 * - FunctionDeclaration
 * - FunctionExpression
 *
 * @param {ASTNode|null} node - A node to check.
 * @returns {boolean} `true` if the node is a function node.
 */
function isFunction(node) {
    return Boolean(node && anyFunctionPattern.test(node.type))
}

module.exports = {
    meta: {
        docs: {
            description: "disallow `Function.prototype.bind()` call.",
            category: "ES5",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.1.0/docs/rules/no-function-bind.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES5 `Function.prototype.bind()` call are forbidden.",
        },
    },
    create(context) {
        const functionVariables = []

        /**
         * Check whether it is a reference initialized with Function
         * @param  {Variable} variable target Variable
         * @param  {Reference} targetReference target Reference
         * @param  {Array} [checked] Array of checked Nodes
         * @returns {boolean} Is a function writed
         */
        function isFunctionReference(variable, targetReference, checked) {
            const targetIndex = variable.references.indexOf(targetReference)
            const targetScope = targetReference.from

            let scopeLastWriteExpr = undefined
            const otherScopeWriteExprs = []
            variable.references.forEach((reference, index) => {
                const writeExpr = reference.writeExpr
                if (!writeExpr || reference.partial) {
                    return
                }
                const selfAssignment = variable.references.some(
                    ref => writeExpr === ref.identifier
                )
                if (selfAssignment) {
                    return
                }
                if (targetScope === reference.from) {
                    // scope
                    if (index < targetIndex) {
                        scopeLastWriteExpr = writeExpr
                    }
                } else {
                    // other scope
                    otherScopeWriteExprs.push(writeExpr)
                }
            })
            if (
                !otherScopeWriteExprs.every(
                    writeExpr =>
                        isFunction(writeExpr) ||
                        isFunctionVariable(writeExpr, checked)
                )
            ) {
                // has not function
                return false
            }
            if (scopeLastWriteExpr) {
                return (
                    isFunction(scopeLastWriteExpr) ||
                    isFunctionVariable(scopeLastWriteExpr, checked)
                )
            }
            return variable.defs.every(
                def =>
                    isFunction(def.node) ||
                    isFunctionVariable(def.node, checked)
            )
        }

        /**
         * Find reference
         * @param  {ASTNode} node target identifier Node
         * @returns {object} reference info
         */
        function findReference(node) {
            for (const variable of functionVariables) {
                for (const reference of variable.references) {
                    if (reference.identifier === node) {
                        return {
                            variable,
                            reference,
                        }
                    }
                }
            }
            return null
        }

        /**
         * Check whether it is a variable initialized with Function
         * @param  {ASTNode} node identifier Node
         * @param  {Array} [optChecked] Array of checked Nodes
         * @returns {boolean} variable is a function
         */
        function isFunctionVariable(node, optChecked) {
            if (node.type !== "Identifier") {
                return false
            }
            const checked = optChecked || []
            if (checked.indexOf(node) >= 0) {
                return false
            }
            checked.push(node)
            const ref = findReference(node)
            if (!ref) {
                return false
            }
            const { variable, reference } = ref
            return isFunctionReference(variable, reference, checked)
        }

        /**
         * Get method target Node
         * @param  {ASTNode} node CallExpression node
         * @returns {ASTNode} method target Node
         */
        function getMethodTarget(node) {
            const callee = node.callee
            if (callee.type !== "MemberExpression") {
                return callee
            }
            const methodName = getPropertyName(callee)
            if (methodName === "call" || methodName === "apply") {
                return callee.object
            }
            return callee
        }

        return {
            "VariableDeclarator, VariableDeclaration, FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ClassDeclaration, ClassExpression, CatchClause, ImportDeclaration, ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier"(
                node
            ) {
                const declaredVariables = context.getDeclaredVariables(node)
                functionVariables.push(...declaredVariables)
            },
            CallExpression(node) {
                const callee = getMethodTarget(node)
                if (callee.type !== "MemberExpression") {
                    // not bind
                    return
                }

                if (getPropertyName(callee) !== "bind") {
                    // not bind
                    return
                }

                const object = callee.object
                if (isFunction(object)) {
                    context.report({ node, messageId: "forbidden" })
                } else if (
                    object.type === "MemberExpression" &&
                    getPropertyName(object) === "prototype" &&
                    object.object.type === "Identifier" &&
                    object.object.name === "Function"
                ) {
                    context.report({ node, messageId: "forbidden" })
                } else if (isFunctionVariable(object)) {
                    context.report({ node, messageId: "forbidden" })
                }
            },
        }
    },
}
