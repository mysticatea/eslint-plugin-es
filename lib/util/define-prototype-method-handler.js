"use strict"

const { getPropertyName } = require("eslint-utils")
const { optionalRequire } = require("./optional-require")

/** @type {import("typescript")} */
const ts = optionalRequire(require, "typescript")

/**
 * Define handlers to disallow prototype methods.
 * @param {RuleContext} context The rule context.
 * @param {Record<string, readonly string[]>} nameMap The method names to disallow. The key is class names and that value is method names.
 * @returns {Record<string, (node: ASTNode) => void>} The defined handlers.
 */
function definePrototypeMethodHandler(context, nameMap) {
    const aggressive = getAggressiveOption(context)

    /** @type {ReadonlyMap<any, import("typescript").Node>} */
    const tsNodeMap = context.parserServices.esTreeNodeToTSNodeMap
    /** @type {import("typescript").TypeChecker} */
    const checker =
        context.parserServices.program &&
        context.parserServices.program.getTypeChecker()

    const isTS = Boolean(ts && tsNodeMap && checker)

    /**
     * Check if the type of the given node is one of given class or not.
     * @param {MemberExpression} memberAccessNode The MemberExpression node.
     * @param {string} className The class name to disallow.
     * @returns {boolean} `true` if should disallow it.
     */
    function checkObjectType(memberAccessNode, className) {
        return isTS
            ? checkByPropertyDeclaration(memberAccessNode, className) ||
                  checkByObjectExpressionType(memberAccessNode, className)
            : aggressive
    }

    /**
     * Check if the type of the given node by the declaration of `node.property`.
     * @param {MemberExpression} memberAccessNode The MemberExpression node.
     * @param {string} className The class name to disallow.
     * @returns {boolean} `true` if should disallow it.
     */
    function checkByPropertyDeclaration(memberAccessNode, className) {
        const propertyTsNode = tsNodeMap.get(memberAccessNode.property)
        const propertySymbol =
            propertyTsNode && checker.getSymbolAtLocation(propertyTsNode)
        const methodDecls = propertySymbol && propertySymbol.declarations

        if (methodDecls) {
            for (const methodDecl of methodDecls) {
                const type = checker.getTypeAtLocation(methodDecl.parent)
                if (type) {
                    const typeName = checker.typeToString(type)
                    if (className === typeName) {
                        return true
                    }
                }
            }
        }

        return false
    }

    /**
     * Check if the type of the given node by the type of `node.object`.
     * @param {MemberExpression} memberAccessNode The MemberExpression node.
     * @param {string} className The class name to disallow.
     * @returns {boolean} `true` if should disallow it.
     */
    function checkByObjectExpressionType(memberAccessNode, className) {
        const objectTsNode = tsNodeMap.get(memberAccessNode.object)
        const objectType = checker.getTypeAtLocation(objectTsNode)
        return typeEquals(objectType, className)
    }

    /**
     * Check if the name of the given type is expected or not.
     * @param {import("typescript").Type} type The type to check.
     * @param {string} className The expected type name.
     * @returns {boolean} `true` if should disallow it.
     */
    function typeEquals(type, className) {
        if ((type.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) !== 0) {
            return aggressive
        }
        if ((type.flags & ts.TypeFlags.Object) !== 0) {
            if (
                (type.objectFlags & ts.ObjectFlags.Reference) !== 0 &&
                type.target !== type
            ) {
                return typeEquals(type.target, className)
            }
            if (
                (type.objectFlags &
                    (ts.ObjectFlags.ArrayLiteral | ts.ObjectFlags.Tuple)) !==
                0
            ) {
                return className === "Array"
            }
            if ((type.objectFlags & ts.ObjectFlags.ClassOrInterface) !== 0) {
                return type.symbol.escapedName === className
            }
        }
        if ((type.flags & ts.TypeFlags.StringLike) !== 0) {
            return className === "String"
        }
        if ((type.flags & ts.TypeFlags.TypeParameter) !== 0) {
            // `type.getConstraint()` method doesn't return the constraint type
            // of the type parameter for some reason. So this gets the constraint
            // type via AST.
            const symbol = type.getSymbol()
            const decls = symbol && symbol.getDeclarations()
            const typeParamDecl = decls && decls[0]
            if (
                ts.isTypeParameterDeclaration(typeParamDecl) &&
                typeParamDecl.constraint != null
            ) {
                return typeEquals(
                    checker.getTypeFromTypeNode(typeParamDecl.constraint),
                    className,
                )
            }
        }
        if ((type.flags & ts.TypeFlags.UnionOrIntersection) !== 0) {
            return type.types.some(t => typeEquals(t, className))
        }

        return checker.typeToString(type) === className
    }

    // For performance
    const nameMapEntries = Object.entries(nameMap)
    if (nameMapEntries.length === 1) {
        const [[className, methodNames]] = nameMapEntries
        return {
            MemberExpression(node) {
                const propertyName = getPropertyName(node, context.getScope())
                if (
                    methodNames.includes(propertyName) &&
                    checkObjectType(node, className)
                ) {
                    context.report({
                        node,
                        messageId: "forbidden",
                        data: {
                            name: `${className}.prototype.${propertyName}`,
                        },
                    })
                }
            },
        }
    }

    return {
        MemberExpression(node) {
            const propertyName = getPropertyName(node, context.getScope())
            for (const [className, methodNames] of nameMapEntries) {
                if (
                    methodNames.includes(propertyName) &&
                    checkObjectType(node, className)
                ) {
                    context.report({
                        node,
                        messageId: "forbidden",
                        data: {
                            name: `${className}.prototype.${propertyName}`,
                        },
                    })
                }
            }
        },
    }
}

/**
 * Get `aggressive` option value.
 * @param {RuleContext} context The rule context.
 * @returns {boolean} The gotten `aggressive` option value.
 */
function getAggressiveOption(context) {
    const options = context.options[0]
    const globalOptions = context.settings.es

    if (options && typeof options.aggressive === "boolean") {
        return options.aggressive
    }
    if (globalOptions && typeof globalOptions.aggressive === "boolean") {
        return globalOptions.aggressive
    }

    return false
}

module.exports = { definePrototypeMethodHandler }
