/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-nullish-coalescing-operators.js")

if (!RuleTester.isSupported(2020)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of no-nullish-coalescing-operators.")
    return
}

new RuleTester().run("no-nullish-coalescing-operators", rule, {
    valid: ["a ? b : c", "a && b", "a || b"],
    invalid: [
        {
            code: "a??b",
            errors: [
                {
                    message:
                        "ES2020 nullish coalescing operators are forbidden.",
                    column: 2,
                    endColumn: 4,
                },
            ],
        },
        {
            code: ` /* ?? comment ?? */
            a /* ?? comment ?? */
            ?? /* ?? comment ?? */
            b /* ?? comment ?? */`,
            errors: [
                {
                    message:
                        "ES2020 nullish coalescing operators are forbidden.",
                    line: 3,
                    column: 13,
                    endLine: 3,
                    endColumn: 15,
                },
            ],
        },
    ],
})
