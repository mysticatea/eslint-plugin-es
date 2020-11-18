# es/no-modules
> disallow modules

- ✅ The following configurations enable this rule: `plugin:es/no-new-in-es2015`, `plugin:es/restrict-to-es3`, and `plugin:es/restrict-to-es5`

This rule reports ES2015 modules as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint es/no-modules: error */
import x1 from &quot;x1&quot;
import {x2} from &quot;x2&quot;
import * as x3 from &quot;x3&quot;
export default function() {}
export { x4 } from &quot;x4&quot;
export { x5 }
" />

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/lib/rules/no-modules.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v3.0.1/tests/lib/rules/no-modules.js)
