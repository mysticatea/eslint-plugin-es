# es/no-object-values
> disallow the `Object.values` method

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2017`, `plugin:es/restrict-to-es3`, `plugin:es/restrict-to-es5`, `plugin:es/restrict-to-es2015`, and `plugin:es/restrict-to-es2016`

This rule reports ES2017 `Object.values` method as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-object-values: error */
const values = Object.values(obj)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-object-values.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-object-values.js)
