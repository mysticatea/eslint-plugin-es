# es/no-dynamic-import
> disallow `import()` syntax

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2020`, `plugin:es/restrict-to-es3`, `plugin:es/restrict-to-es5`, `plugin:es/restrict-to-es2015`, `plugin:es/restrict-to-es2016`, `plugin:es/restrict-to-es2017`, `plugin:es/restrict-to-es2018`, and `plugin:es/restrict-to-es2019`

This rule reports ES2020 [`import()` syntax](https://github.com/tc39/proposal-dynamic-import) as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-dynamic-import: error */
async function f() {
    const a = await import(&quot;source&quot;)
}
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-dynamic-import.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-dynamic-import.js)
