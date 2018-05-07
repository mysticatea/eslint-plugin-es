# disallow `String.prototype.includes()` call (es/no-string-prototype-methods-es2017)

This rule reports `String.prototype` methods in ES2017 call as errors (to the extent possible).

Disallowed methods are as follows.

* `String.prototype.padStart`
* `String.prototype.padEnd`

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
var padNum = "123".padStart(10, "0")

var padStr = "string".padEnd(10, " ")
```

👌 Examples of **correct** code for this rule:

```js
var padNum = ("0".repeat(10) + "123").substr(-10)

var padStr = ("string" + " ".repeat(10)).substr(0 , 10)
```

## :wrench:  Options

```json
{
  "es/no-string-prototype-methods-es2017": [”error, {
    "allow": []
  }]
}
```

### `allow`

Define the methods to allow. (Default empty)

👌 Example of **correct** code for this setting:

```js
/* eslint es/no-string-prototype-methods-es2017: ["error", { "allow": ["padStart"] }] */

var padNum = "123".padStart(10, "0")
```

