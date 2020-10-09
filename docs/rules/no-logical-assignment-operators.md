# disallow logical assignment operators (es/no-logical-assignment-operators)

- 🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

This rule reports ES2021 [logical assignment operators](https://github.com/tc39/proposal-logical-assignment) as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-logical-assignment-operators: error */
x ||= y
x &&= y
x ??= y
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-logical-assignment-operators.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-logical-assignment-operators.js)
