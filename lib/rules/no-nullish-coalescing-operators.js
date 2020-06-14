/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow nullish coalescing operators.",
            category: "ES2020",
            recommended: false,
            url:
                "http://mysticatea.github.io/eslint-plugin-es/rules/no-nullish-coalescing-operators.html",
        },
        fixable: null,
        messages: {
            forbidden: "ES2020 nullish coalescing operators are forbidden.",
        },
        schema: [],
        type: "problem",
    },
    create(context) {
        return {
            "LogicalExpression[operator='??']"(node) {
                context.report({
                    node: context.getSourceCode().getTokenAfter(node.left),
                    messageId: "forbidden",
                })
            },
        }
    },
}
