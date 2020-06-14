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
                    node: context.getSourceCode().getTokenAfter(node.callee),
                    messageId: "forbidden",
                })
            },
            "MemberExpression[optional=true]"(node) {
                context.report({
                    node: context.getSourceCode().getTokenAfter(node.object),
                    messageId: "forbidden",
                })
            },
        }
    },
}
