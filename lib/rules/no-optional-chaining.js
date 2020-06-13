/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow optional chaining.",
            category: "ES2020",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-optional-chaining.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2020 optional chaining is forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "CallExpression[optional=true]"(node) {
                context.report({
                    loc: {
                        start: node.callee.loc.end,
                        end: node.loc.end,
                    },
                    messageId: "forbidden",
                })
            },
            "MemberExpression[optional=true]"(node) {
                context.report({
                    loc: {
                        start: node.object.loc.end,
                        end: node.property.loc.start,
                    },
                    messageId: "forbidden",
                })
            },
        }
    },
}
