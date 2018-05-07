/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-string-prototype-methods-es2017.js")

new RuleTester().run("no-string-prototype-methods-es2017", rule, {
    valid: [
        `
var padNum = ("0".repeat(10) + "123").substr(-10)

var padStr = ("string" + " ".repeat(10)).substr(0 , 10)
        `,
        `
/* eslint no-string-prototype-methods-es2017: ["error", { "allow": ["padStart"] }] */

var padNum = "123".padStart(10, "0")
        `,
        `var padNum = padStart(10)`,
        `var padNum = padEnd(10)`,
        {
            code: `"string".padStart(10)`,
            options: [{ allow: ["padStart"] }],
        },
        {
            code: `"string".padEnd(10)`,
            options: [{ allow: ["padEnd"] }],
        },
    ],
    invalid: [
        {
            code: `
var padNum = "123".padStart(10, "0")

var padStr = "string".padEnd(10, " ")
            `,
            errors: [
                "ES2017 `String.prototype.padStart()` call are forbidden.",
                "ES2017 `String.prototype.padEnd()` call are forbidden.",
            ],
        },
        {
            code: `var pad = "123".padStart(10)`,
            errors: [
                "ES2017 `String.prototype.padStart()` call are forbidden.",
            ],
        },
        {
            code: `var pad = "123".padEnd(10)`,
            errors: ["ES2017 `String.prototype.padEnd()` call are forbidden."],
        },
        {
            code: `var pad = String.prototype.padEnd.call("123", 10)`,
            errors: ["ES2017 `String.prototype.padEnd()` call are forbidden."],
        },
    ],
})
