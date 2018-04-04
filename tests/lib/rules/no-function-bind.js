/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("../../tester")
const rule = require("../../../lib/rules/no-function-bind.js")

new RuleTester().run("no-function-bind", rule, {
    valid: [
        `
var fn = function() {}

var that = this
var res = (function() {
    var data = x + y
    return that.proc(data)
})()

button.addEventListener('click', function() { that.onClick() })
        `,
        `
var fn = _.bind(function() {}, this)

var res = _.bind(function() {
    var data = x + y
    return this.proc(data)
}, this)()

button.addEventListener('click', _.bind(function() { this.onClick() }, this))
        `,
        "var fn = function() {}",
        "var fn = (function() {})",
        "var res = function() {}.call(this)",
        "data.bind(this)",
        "var hasBind = !!function() {}.bind",
        "var res = (function() { return bindable })().bind(this)",
        "var fn = function() {}[bind](this)",
        "String.prototype.bind(function() {}, this)",
        "var bind = Function.prototype.bind",
        `
var fn = unknown
fn.bind(this)
        `,
        `
var fn = function() {}
fn = unknown
fn.bind(this)
        `,
        `
var fn = function() {
    fn = unknown
}
fn.bind(this)
        `,
        `
var fn
fn.bind(this)
        `,
        `
var {fn} = function() {}
fn.bind(this)
        `,
        `
var fn = function() {}
fn = fn.fn
fn.bind(this)
        `,
        `
function fn() {
}
fn = unknown
fn.bind(this)
        `,
        `
var fn1 = () => {}
var fn2 = fn1
function fn3() {
    fn1 = fn2
    fn2 = fn1
}
fn2.bind(this)
        `,
        `
var fn = unknown
fn.bind(this)
fn = () => {}
        `,
    ],
    invalid: [
        {
            code: `
var fn = function() {}.bind(this)

var res = function() {
    var data = x + y
    return this.proc(data)
}.bind(this)()

button.addEventListener('click', function() { this.onClick() }.bind(this))
            `,
            errors: [
                "ES5 `Function.prototype.bind()` call are forbidden.",
                "ES5 `Function.prototype.bind()` call are forbidden.",
                "ES5 `Function.prototype.bind()` call are forbidden.",
            ],
        },
        {
            code: "var fn = function() {}.bind(this)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = (function() {}).bind(this)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = (((function() {}))).bind(this)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = function() {}.bind(me)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = function() {}.bind(this)()",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = function() {}['bind'](this)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: "var fn = Function.prototype.bind(function() {}, this)",
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn = function() {}
fn.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn1 = function() {}
var fn2 = fn1
fn2.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
const fn1 = function() {};
(function() {
    const fn1 = unknown
})()
fn1.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn = function() {}
fn = fn
fn.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn = function() {}
fn = function() {}
fn.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn1 = function() {}
var fn2 = fn1
fn2 = function() {}
fn2 = fn1
fn2.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn = () => {}
fn.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
function fn() {
}
fn.bind(this)
            `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
        {
            code: `
var fn = unknown
fn = function() {}
fn.bind(this)
        `,
            errors: ["ES5 `Function.prototype.bind()` call are forbidden."],
        },
    ],
})
