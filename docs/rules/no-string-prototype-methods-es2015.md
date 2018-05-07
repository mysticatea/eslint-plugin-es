# disallow `String.prototype.includes()` call (es/no-string-prototype-methods-es2015)

This rule reports `String.prototype` methods in ES2015 call as errors (to the extent possible).

Disallowed methods are as follows.

* `String.prototype.codePointAt`
* `String.prototype.normalize`
* `String.prototype.repeat`
* `String.prototype.startsWith`
* `String.prototype.endsWith`
* `String.prototype.includes`

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
if ("string".includes("s")) {
    //
}

if ("string".startsWith("s")) {
    //
}
```

👌 Examples of **correct** code for this rule:

```js
if ("string".indexOf("s") > -1) {
    //
}

if ("string".indexOf("s") === 1) {
    //
}
```

## :wrench:  Options

```json
{
  "es/no-string-prototype-methods-es2015": [”error, {
    "allow": []
  }]
}
```

### `allow`

Define the methods to allow. (Default empty)

👌 Example of **correct** code for this setting:

```js
/* eslint es/no-string-prototype-methods-es2015: ["error", { "allow": ["includes"] }] */

if ("string".includes("s")) {
    //
}
```
