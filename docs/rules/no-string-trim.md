# disallow `String.prototype.trim()` call (es/no-string-trim)

This rule reports ES5 `String.prototype.trim()` call as errors (to the extent possible).

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
var s = "  abc  ".trim()
```

👌 Examples of **correct** code for this rule:

```js
var s = "  abc  ".replace(/^\s+|\s+$/g,'')
```