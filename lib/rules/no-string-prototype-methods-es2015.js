/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const {
    defineStringPrototypePropertyVisitor,
    getMemberPropertyName,
} = require("../variable-property-utils")

const STRING_ES2015_METHODS = [
    "codePointAt",
    "normalize",
    "repeat",
    "startsWith",
    "endsWith",
    "includes",
]

module.exports = {
    meta: {
        docs: {
            description: "disallow `String.prototype` methods in ES2015 call.",
            category: "ES2015",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.1.0/docs/rules/no-string-prototype-methods-es2015.md",
        },
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                        minItems: 1,
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            forbidden:
                "ES2015 `String.prototype.{{methodName}}()` call are forbidden.",
        },
    },
    create(context) {
        const options = context.options[0] || {}
        const allowed = options.allow || []

        /**
         * Checks disallow method
         * @param  {ASTNode} node MemberExpression node
         * @returns {boolean} is disallow method
         */
        function isDisallowMethod(node) {
            const methodName = getMemberPropertyName(node)
            if (allowed.includes(methodName)) {
                return false
            }
            if (STRING_ES2015_METHODS.includes(methodName)) {
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
                            data: {
                                methodName: getMemberPropertyName(propertyNode),
                            },
                        })
                    },
                }
            },
        })
    },
}
