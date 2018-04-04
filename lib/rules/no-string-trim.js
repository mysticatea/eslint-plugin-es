/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const {
    defineStringPrototypePropertyVisitor,
    getMemberPropertyName,
} = require("../variable-property-utils")

const STRING_ES5_METHODS = ["trim"]

module.exports = {
    meta: {
        docs: {
            description:
                "disallow `String.prototype.trim()` methods in ES5 call.",
            category: "ES5",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.1.0/docs/rules/no-string-trim.md",
        },
        fixable: null,
        schema: [],
        messages: {
            forbidden: "ES5 `String.prototype.trim()` call are forbidden.",
        },
    },
    create(context) {
        /**
         * Checks disallow method
         * @param  {ASTNode} node MemberExpression node
         * @returns {boolean} is disallow method
         */
        function isDisallowMethod(node) {
            const methodName = getMemberPropertyName(node)
            if (STRING_ES5_METHODS.includes(methodName)) {
                return true
            }
            return false
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
            const methodName = getMemberPropertyName(callee)
            if (methodName === "call" || methodName === "apply") {
                return callee.object
            }
            return callee
        }

        return defineStringPrototypePropertyVisitor(context, {
            CallExpression(node) {
                const propertyNode = getMethodTarget(node)
                if (
                    propertyNode.type !== "MemberExpression" ||
                    !isDisallowMethod(propertyNode)
                ) {
                    return null
                }
                return {
                    propertyNode,
                    applyPropertyNode(_) {
                        context.report({
                            node,
                            messageId: "forbidden",
                        })
                    },
                }
            },
        })
    },
}
