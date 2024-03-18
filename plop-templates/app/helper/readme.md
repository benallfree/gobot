![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

## `{{name}}` for npm

This package allows you to use [{{slug}}]({{homepage}}) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot {{name}} --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`{{name}}`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-{{lowerCase name}}
```

With `gobot-{{lowerCase name}}` present, Gobot will default to the `{{name}}` version corresponding to the `gobot-{{lowerCase name}}` version you installed. Now you can use `{{name}}` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`{{name}}`).run([`--version`])
```

**Locking to a specific version**

The `gobot-{{lowerCase name}}` package version always mirrors the underlying `{{name}}` [version](#known-versions):

```bash
npm i gobot-{{lowerCase name}}@{{version}}
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `{{name}}` even though `gobot-{{lowerCase name}}` is installed.

```js
// Run a specific version (override)
gobot(`{{name}}`, { version: `{{version}}` }).run([`--version`])

// Or the latest version (override)
gobot(`{{name}}`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`{{name}}`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-{{lowerCase name}}` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-{{lowerCase name}}
{{name}} --help

# Upgrade to  @latest or any version
npm i -g gobot-{{lowerCase name}}@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/{{branch}}/docs/readme.md).

{{{notesMd}}}

## Sample project

View the [{{slug}} sample project](https://github.com/benallfree/gobot/tree/{{{branch}}}/src/apps/{{name}}/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

{{{postambleMd}}}

## All known releases

`gobot-{{lowerCase name}}` versions mirror `{{name}}` versions. Gobot knows about {{count versions}} releases of `{{name}}`:

{{{releasesMd}}}
