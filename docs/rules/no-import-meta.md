# disallow `import.meta` meta property (es/no-import-meta)

This rule reports ES2020 [import.meta](https://github.com/tc39/proposal-import-meta) as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-import-meta: error */
import.meta
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-import-meta.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-import-meta.js)
