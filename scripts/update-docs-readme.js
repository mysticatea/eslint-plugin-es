/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { categories } = require("./rules")
const collator = new Intl.Collator("en", { numeric: true })
const conjunction = new Intl.ListFormat("en", { type: "conjunction" })

// Analyze configs
const configRoot = path.resolve(__dirname, "../lib/configs/")
const configs = fs.readdirSync(configRoot).map(filename => {
    const basename = path.basename(filename, ".js")
    const id = `plugin:es/${basename}`
    const configFile = path.join(configRoot, filename)
    const categoryIds = [
        extractCategoryId(configFile),
        ...(require(configFile).extends || []).map(extractCategoryId),
    ].filter(Boolean)

    const categoryId = /es\d+/u.exec(basename)[0].toUpperCase()
    return { id, categoryIds, categoryId }
})

// Write docs/README.md
const categoriesTable = configs
    .filter(
        c => !categories[c.categoryId] || !categories[c.categoryId].noConfig
    )
    .sort(compareConfig)
    .map(toCategoryTableRow)
    .join("\n")

const hasExperimental = configs
    .filter(c => categories[c.categoryId] && !categories[c.categoryId].noConfig)
    .some(c => categories[c.categoryId].experimental)

fs.writeFileSync(
    "docs/README.md",
    fs.readFileSync("docs/README.md", "utf8").replace(
        /<!-- CONFIGS_TABLE_START -->(?:.*?)<!-- CONFIGS_TABLE_END -->/su,
        `<!-- CONFIGS_TABLE_START -->

| Config ID | Description |
|:----------|:------------|
${categoriesTable}${
            hasExperimental
                ? `

:::warning
The config of **Experimental Feature**s may be changed or removed in future releases without notice.
:::`
                : ""
        }

<!-- CONFIGS_TABLE_END -->`
    )
)

// Convert categories to README sections
const ruleSectionContent = Object.keys(categories)
    .map(toSection)
    .join("\n")

// Write docs/rules/README.md
fs.writeFileSync(
    "docs/rules/README.md",
    `# Available Rules

This plugin provides the following rules.

- 🔧 mark means that the \`--fix\` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by the rule.

${ruleSectionContent}
`
)

//------------------------------------------------------------------------------

function extractCategoryId(filePath) {
    const basename = path.basename(filePath, ".js")
    const match = /no-new-in-(es\d+)/u.exec(basename)
    return match ? match[1].toUpperCase() : undefined
}

function toSection(categoryId) {
    const includesConfigs = configs.filter(c =>
        c.categoryIds.includes(categoryId)
    )
    const configIds = conjunction.format(
        includesConfigs
            .map(c => `\`${c.id}\``)
            .sort(collator.compare.bind(collator))
    )
    const comment = configIds
        ? `There are multiple configs which enable all rules in this category: ${configIds}`
        : "There is no config which enables the rules in this category."

    const experimentalConfigs = includesConfigs.filter(
        c => categories[c.categoryId] && categories[c.categoryId].experimental
    )

    return `## ${categoryId}

${comment}

${toTable(categories[categoryId])}
${experimentalConfigs
    .map(
        c => `
:::warning
\`"${c.id}"\` config is an **Experimental Feature**. It may be changed or removed in future releases without notice.
:::
`
    )
    .join("\n\n")}`
}

function toTable({ rules }) {
    return `| Rule ID | Description |    |
|:--------|:------------|:--:|
${rules.map(toTableRow).join("\n")}`
}

function toTableRow({ ruleId, description, fixable }) {
    const title = `[es/${ruleId}](./${ruleId}.md)`
    const icons = fixable ? "🔧" : ""
    return `| ${title} | ${description}. | ${icons} |`
}

function compareConfig(a, b) {
    for (const convert of [
        c => c.id.replace(/\d.*$/gu, ""),
        c => Number.MAX_SAFE_INTEGER - Number(c.categoryId.replace(/\D/gu, "")),
        c => c.id,
    ]) {
        const aId = convert(a)
        const bId = convert(b)
        if (aId > bId) {
            return 1
        }
        if (aId < bId) {
            return -1
        }
    }
    return 0
}

function toCategoryTableRow(config) {
    const category = categories[config.categoryId]

    let description = ""
    if (/no-new-in-es\d+/u.test(config.id)) {
        description = `disallow the new stuff in ${config.categoryId}.`
    } else if (/restrict-to-es\d+/u.test(config.id)) {
        description = `disallow new stuff that ${config.categoryId} doesn't include.`
    }
    if (category && category.experimental) {
        description += " **(Experimental Feature)**"
    }
    return `| \`${config.id}\` | ${description} |`
}
