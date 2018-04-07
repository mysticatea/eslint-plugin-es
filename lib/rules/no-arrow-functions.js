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

        /**
         * Report that ArrowFunctionExpression is being used
         * @param {Node} node ArrowFunctionExpression Node
         * @param {boolean} hasThis Whether `this` is referenced in` function` scope
         * @param {boolean} hasSuper Whether `super` is referenced in` function` scope
         * @returns {void}
         */
        function report(node, hasThis, hasSuper) {
            context.report({
                node,
                messageId: "forbidden",
                fix(fixer) {
                    if (hasSuper) {
                        return undefined
                    }
                    const functionText = toFunctionExpression(node)
                    return fixer.replaceText(
                        node,
                        hasThis ? `${functionText}.bind(this)` : functionText
                    )
                },
            })
        }

        let stack = { upper: null, hasThis: false, hasSuper: false }
        return {
            ":function"() {
                stack = { upper: stack, hasThis: false, hasSuper: false }
            },
            ":function:exit"(node) {
                const { hasThis, hasSuper } = stack
                stack = stack.upper

                if (node.type === "ArrowFunctionExpression") {
                    report(node, hasThis, hasSuper)

                    stack.hasThis = stack.hasThis || hasThis
                    stack.hasSuper = stack.hasSuper || hasSuper
                }
            },
            ThisExpression() {
                stack.hasThis = true
            },
            Super() {
                stack.hasSuper = true
            },
        }
    },
}
