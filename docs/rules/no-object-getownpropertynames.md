# es/no-object-getownpropertynames
> disallow the `Object.getOwnPropertyNames` method

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es5` and `plugin:es/restrict-to-es3`

This rule reports ES5 `Object.getOwnPropertyNames` method as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-object-getownpropertynames: error */
Object.getOwnPropertyNames(obj, &quot;prop&quot;, {})
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-object-getownpropertynames.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-object-getownpropertynames.js)
