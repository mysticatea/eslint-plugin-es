/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-unicode-codepoint-escapes.js")

new RuleTester().run("no-unicode-codepoint-escapes", rule, {
    valid: [
        "foo = 1",
        "\\u0045 = 1",
        "'foo'",
        "'\\u0045'",
        "'u{20}'",
        "'\\\\u{20}'",
        "`foo`",
        "`\\u0045`",
        "`u{20}`",
        "`\\\\u{20}`",
        "tag`\\unicode`",
        "tag`\\u{ZZZ}`",
    ],
    invalid: [
        {
            code: "\\u{45} = 1",
            output: "\\u0045 = 1",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        {
            code: "a\\u{45}b = 1",
            output: "a\\u0045b = 1",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        {
            code: "'\\u{45}'",
            output: "'\\u0045'",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        {
            code: "'a\\u{45}b'",
            output: "'a\\u0045b'",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        // {
        //     code: "`\\u{45}`",
        //     output: "`\\u0045`",
        //     errors: [
        //         "ES2015 Unicode code point escape sequences are forbidden.",
        //     ],
        // },
        {
            code: "tag`\\u{45}`",
            output: "tag`\\0045}`",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        // {
        //     //eslint-disable-next-line no-template-curly-in-string
        //     code: "`\\u{45}${a}\\u{46}`",
        //     //eslint-disable-next-line no-template-curly-in-string
        //     output: "`\\u0045${a}\\u0046`",
        //     errors: [
        //         "ES2015 Unicode code point escape sequences are forbidden.",
        //         "ES2015 Unicode code point escape sequences are forbidden.",
        //     ],
        // },
        {
            //eslint-disable-next-line no-template-curly-in-string
            code: "tag`\\u{45}${a}\\u{46}`",
            //eslint-disable-next-line no-template-curly-in-string
            output: "tag`\\0045}${a}\\0046}`",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        {
            //eslint-disable-next-line no-template-curly-in-string
            code: "tag`\\u{XXXZX}${a}\\u{46}`",
            //eslint-disable-next-line no-template-curly-in-string
            output: "tag`\\u{XXXZX}${a}\\0046}`",
            errors: [
                "ES2015 Unicode code point escape sequences are forbidden.",
            ],
        },
        {
            code: '"\\u{20BB7}"',
            output: '"\\uD842\\uDFB7"',
            errors: [
                {
                    message:
                        "ES2015 Unicode code point escape sequences are forbidden.",
                    column: 2,
                    line: 1,
                },
            ],
        },
        {
            code: "`\\u{20BB7}`",
            output: "`\\D842\\uDFB7}`",
            errors: [
                {
                    message:
                        "ES2015 Unicode code point escape sequences are forbidden.",
                    column: 1,
                    line: 1,
                },
            ],
        },
        {
            code: `
a=\`\${a}\\u{D842}\\u{DFB7}\`
b="\\u{20BB7}"
`,
            output: `
a=\`\${a}\\D842}\\DFB7}\`
b="\\uD842\\uDFB7"
`,
            errors: [
                {
                    message:
                        "ES2015 Unicode code point escape sequences are forbidden.",
                    line: 2,
                    column: 7,
                    endLine: 2,
                    endColumn: 15,
                },
                {
                    message:
                        "ES2015 Unicode code point escape sequences are forbidden.",
                    line: 2,
                    column: 15,
                    endLine: 2,
                    endColumn: 23,
                },
                {
                    message:
                        "ES2015 Unicode code point escape sequences are forbidden.",
                    line: 3,
                    column: 4,
                    endLine: 3,
                    endColumn: 13,
                },
            ],
        },
    ],
})
