/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-string-prototype-methods-es2015.js")

new RuleTester().run("no-string-prototype-methods-es2015", rule, {
    valid: [
        `
if ("string".indexOf("s") > -1) {
    //
}

if ("string".indexOf("s") === 1) {
    //
}
        `,
        `
/* eslint no-string-prototype-methods-es2015: ["error", { "allow": ["includes"] }] */

if ("string".includes("s")) {
    //
}
        `,
        `"string".indexOf("s") > -1`,
        `'string'.indexOf('s') > -1`,
        "`string`.indexOf(`s`) > -1",
        `"string"["indexOf"]("s") > -1`,
        //eslint-disable-next-line no-template-curly-in-string
        "`${s}tring`.indexOf(`s`) > -1",
        `("string" - 0).includes("s")`,
        `("" + 1).indexOf("s") > -1`,
        `(1 + 2 + 3 + "").indexOf("s") > -1`,
        `(1 + 2 + 3 + 4).includes("s") > -1`,
        "var hasIncludes = !!''.includes",
        "var res = {a:''}.includes('s')",
        "var res = [''].includes('s')",
        "'string'[includes]('s')",
        "Function.prototype.includes.call('string', 's')",
        "var includes = String.prototype.includes",
        `
var s = unknown
s.includes('s')
        `,
        `
var s = unknown.call()
s.includes('s')
        `,
        `
var s = 'string'
s = unknown
s.includes('s')
        `,
        `
var s = function() {
    s = 'string'
}
s.includes('s')
        `,
        `
var s
s.includes('s')
        `,
        `
var {s} = 'string'
s.includes('s')
        `,
        `
var s = 'string'
s = s.ss
s.includes('s')
        `,
        `
(s) => {
    s.includes('s')
}
        `,
        `
var s
function fn() {
    s = 123
}
s.includes('s')
        `,
        `
var s
s.includes('s')
s = 'str'
        `,
        `
let s1
let s2
function fn1() {
    s2 = s1
    s1 = s2
}
function fn2() {
    s2 = s1
    s1 = s2
}
s1.includes('s')
        `,
        `
var s = String.pppppp.slice.apply('abc', [1])
s.includes('s')
        `,
        `
var s = String.prototype().slice.apply('abc', [1])
s.includes('s')
        `,
        `
var s = Array.prototype.slice.apply('abc', [1])
s.includes('s')
        `,
        `
var s = String.prototype.unknown.apply('abc', [1])
s.includes('s')
        `,
        `
var a = Array.prototype.unknown.call(arguments)
var s = a.join('')
s.includes('s')
        `,
        `
var a = unknown.keys(obj)
var s = a.join('')
s.includes('s')
        `,
        `
var a = unknown.unknown(obj)
var s = a.join('')
s.includes('s')
        `,
        `
var s = split(',').join('')
s.includes('s')
        `,
        `
var s = Number(a)
s.includes('s')
        `,
        `
var s = (123 + '456').toFixed()
s.includes('s')
        `,
        `
var s = (123 === 456).toFixed()
s.includes('s')
        `,
        `
var s = Math.unknown.toFixed()
s.includes('s')
        `,
        `
var s = ('123').valueOf().toFixed()
s.includes('s')
        `,
        `
var s = Unknown.max(123, 456).toFixed()
s.includes('s')
        `,
        `
var s = Unknown.prototype.charCodeAt.call('123', 0).toFixed()
s.includes('s')
        `,
        `
var s = valueOf(123).toFixed('')
s.includes('s')
        `,
        `
var s = Unknown.UTC().toDateString()
s.includes('s')
        `,
        `
var s = UTC().toDateString()
s.includes('s')
        `,
        `
const {...a} = b
var s = a.join()
s.includes('s')
        `,
        {
            code: `"string".includes("s")`,
            options: [{ allow: ["includes"] }],
        },
        {
            code: `"string".startsWith("s")`,
            options: [{ allow: ["startsWith"] }],
        },
        {
            code: `"string".endsWith("s")`,
            options: [{ allow: ["endsWith"] }],
        },
        {
            code: `"string".codePointAt(1)`,
            options: [{ allow: ["codePointAt"] }],
        },
        {
            code: `"string".normalize()`,
            options: [{ allow: ["normalize"] }],
        },
        {
            code: `"string".repeat(100)`,
            options: [{ allow: ["repeat"] }],
        },
    ],
    invalid: [
        {
            code: `
if ("string".includes("s")) {
    //
}

if ("string".startsWith("s")) {
    //
}
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
                "ES2015 `String.prototype.startsWith()` call are forbidden.",
            ],
        },
        {
            code: `"string".includes("s")`,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `"string".startsWith("s")`,
            errors: [
                "ES2015 `String.prototype.startsWith()` call are forbidden.",
            ],
        },
        {
            code: `"string".endsWith("s")`,
            errors: [
                "ES2015 `String.prototype.endsWith()` call are forbidden.",
            ],
        },
        {
            code: `"string".codePointAt(1)`,
            errors: [
                "ES2015 `String.prototype.codePointAt()` call are forbidden.",
            ],
        },
        {
            code: `"string".normalize()`,
            errors: [
                "ES2015 `String.prototype.normalize()` call are forbidden.",
            ],
        },
        {
            code: `"string".repeat(100)`,
            errors: ["ES2015 `String.prototype.repeat()` call are forbidden."],
        },
        {
            code: `((("string"))).includes("s")`,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `("string").includes(123)`,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `"string"['includes']("s")`,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: "var r = String.prototype.includes.call('string', 's')",
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "string"
s.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = \`string\`
s.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "s" + "tring"
s.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = 123 + "s" + "tring"
s.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "s" + 123
s.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s1 = "string"
var s2 = s1
s1.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
const s1 = "string";
(function() {
    const s1 = unknown
})()
s1.includes('s')
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "string"
s = s
s.includes("s")
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "string"
s = "string"
s.includes("s")
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s1 = ""
var s2 = s1
s2 = ""
s2 = s1
s2.includes("s")
            `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = unknown
s = 'string'
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = 'string'.concat('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String.fromCharCode(9)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = obj.toString()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Object.prototype.toString.call(1)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
(s) => {
    s += ''
    s.includes('s')
}
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String.prototype.slice.call('abc', 1)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String.prototype.slice.apply('abc', [1])
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = new String('abc')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = [1, 2, 3].join('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var a = [1, 2, 3]
var s = a.concat([]).join('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var keys = Object.keys(obj)
var s = keys.join('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var a = Array.from(obj)
var s = a.join('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var a = Array.prototype.slice.call(arguments)
var s = a.join('')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Array.prototype.join.call(a, '')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = new Array(3).join(' ')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Array().join(' ')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = 's,s,s'.split(',').join(' ')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String.prototype.split.call('s,s,s', ',').join(' ')
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s1 = 's,s,s'
var s2 = s1.split(',').join(' ')
s2.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String(a)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var n = 123
var s = n.toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Number.prototype.toExponential.call(456)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = parseInt('123').toPrecision()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = [].length.toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = "abc".length.toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = ("123" - 0).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = (123 + 456).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Number.POSITIVE_INFINITY.toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Math.PI.toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = ("str".indexOf('t')).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = ("a,r,r".split(',').lastIndexOf('r')).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Number.parseFloat('123').toPrecision()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = (123).valueOf().toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Math.max(123, 456).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = new Number().toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Number.prototype.valueOf.call(456).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = String.prototype.charCodeAt.call('123', 0).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Array.prototype.findIndex.call(arguments, Array.isArray).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = JSON.stringify({})
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = new Date().toDateString()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Date.prototype.toDateString.call(d)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = new Date().getFullYear().toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Date.prototype.getFullYear.call(d).toFixed()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Date.UTC().toDateString()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var d = new Date
var s = d.toDateString()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var s = Date().toDateString()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var fmt = new Intl.NumberFormat()
var s = fmt.format(123)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var fmt = new Intl.DateTimeFormat()
var s = fmt.format(new Date())
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var fmt = Intl.NumberFormat()
var s = fmt.format(123)
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
var fmt = Intl.DateTimeFormat()
var s = fmt.format(new Date())
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
(...a) => {
    var s = a.join()
    s.includes('s')
}
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
function fn(...a) {
    var s = a.join()
    s.includes('s')
}
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
const fn = function (...a) {
    var s = a.join()
    s.includes('s')
}
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
        {
            code: `
const [...a] = b
var s = a.join()
s.includes('s')
        `,
            errors: [
                "ES2015 `String.prototype.includes()` call are forbidden.",
            ],
        },
    ],
})
