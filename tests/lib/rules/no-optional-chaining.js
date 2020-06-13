/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-optional-chaining.js")

if (!RuleTester.isSupported(2020)) {
    //eslint-disable-next-line no-console
    console.log("Skip the tests of no-optional-chaining.")
    return
}

new RuleTester().run("no-optional-chaining", rule, {
    valid: ["var x = a.b", "var x = a[b]", "foo()"],
    invalid: [
        {
            code: "var x = a?.b",
            errors: [
                {
                    message: "ES2020 optional chaining is forbidden.",
                    column: 10,
                    endColumn: 12,
                },
            ],
        },
        {
            code: "var x = a?.[b]",
            errors: [
                {
                    message: "ES2020 optional chaining is forbidden.",
                    column: 10,
                    endColumn: 13,
                },
            ],
        },
        {
            code: "foo?.()",
            errors: [
                {
                    message: "ES2020 optional chaining is forbidden.",
                    column: 4,
                    endColumn: 8,
                },
            ],
        },
    ],
})
