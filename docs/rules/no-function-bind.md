# disallow `Function.prototype.bind()` call (es/no-function-bind)

This rule reports ES5 `Function.prototype.bind()` call as errors (to the extent possible).

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
var fn = function() {}.bind(this)

var res = function() {
    var data = x + y
    return this.proc(data)
}.bind(this)()

button.addEventListener('click', function() { this.onClick() }.bind(this))
```

👌 Examples of **correct** code for this rule:

```js
var fn = function() {}

var that = this
var res = (function() {
    var data = x + y
    return that.proc(data)
})()

button.addEventListener('click', function() { that.onClick() })
```

```js
var fn = _.bind(function() {}, this)

var res = _.bind(function() {
    var data = x + y
    return this.proc(data)
}, this)()

button.addEventListener('click', _.bind(function() { this.onClick() }, this))
```
