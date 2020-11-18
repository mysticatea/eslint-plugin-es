# es/no-array-of
> disallow the `Array.of` method

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2015`, `plugin:es/restrict-to-es3`, and `plugin:es/restrict-to-es5`

This rule reports ES2015 `Array.of` method as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-array-of: error */
const array = Array.of(1, 2, 3)
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-array-of.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-array-of.js)
