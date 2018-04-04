/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    meta: {
        docs: {
            description: "disallow arrow function expressions.",
            category: "ES2015",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-es/blob/v1.1.0/docs/rules/no-arrow-functions.md",
        },
        fixable: "code",
        schema: [],
        messages: {
            forbidden: "ES2015 arrow function expressions are forbidden.",
        },
    },
    create(context) {
        const sourceCode = context.getSourceCode()

        /**
         * ArrowFunctionExpression to FunctionExpression
         * @param  {Node} node ArrowFunctionExpression Node
         * @returns {string} function expression text
         */
        function toFunctionExpression(node) {
            const params = node.params
            const paramText = params.length
                ? sourceCode.text.slice(
                      params[0].range[0],
                      params[params.length - 1].range[1]
                  )
                : ""

            const arrowToken = sourceCode.getTokenBefore(
                node.body,
                token => token.type === "Punctuator" && token.value === "=>"
            )

            const bodyText = sourceCode.text.slice(
                arrowToken.range[1],
                node.range[1]
            )
            if (node.body.type === "BlockStatement") {
                return `function(${paramText})${bodyText}`
            }
            return `function(${paramText}){return ${bodyText}}`
        }

        return {
            ArrowFunctionExpression(node) {
                context.report({
                    node,
                    messageId: "forbidden",
                    fix(fixer) {
                        const code = sourceCode.getText(node)
                        const hasThis = /this/.test(code)
                        const functionText = toFunctionExpression(node)
                        return fixer.replaceText(
                            node,
                            hasThis
                                ? `${functionText}.bind(this)`
                                : functionText
                        )
                    },
                })
            },
        }
    },
}
