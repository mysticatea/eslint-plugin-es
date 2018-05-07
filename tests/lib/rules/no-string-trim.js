/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-string-trim.js")

new RuleTester().run("no-string-trim", rule, {
    valid: [
        `var s = "  abc  ".replace(/^\\s+|\\s+$/g,'')`,
        `var s = trim()`,
        `var s = data.trim()`,
    ],
    invalid: [
        {
            code: `var s = "  abc  ".trim()`,
            errors: ["ES5 `String.prototype.trim()` call are forbidden."],
        },
        {
            code: `var s = String.prototype.trim.call(" abc ")`,
            errors: ["ES5 `String.prototype.trim()` call are forbidden."],
        },
    ],
})
