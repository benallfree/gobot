![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-{{slug}}) ![](https://img.shields.io/npm/dt/gobot-{{slug}}) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## {{name}} via npm

This package allows you to use [{{name}}]({{homepage}}) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot {{slug}} --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`{{slug}}`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-{{lowerCase slug}}
```

With `gobot-{{lowerCase slug}}` present, Gobot will default to the `{{slug}}` version corresponding to the `gobot-{{lowerCase slug}}` version you installed. Now you can use `{{slug}}` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`{{slug}}`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-{{lowerCase slug}}` package version always mirrors the underlying `{{slug}}` [version](#all-known-releases):

```bash
npm i gobot-{{lowerCase slug}}@{{version}}
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `{{slug}}` even though `gobot-{{lowerCase slug}}` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`{{slug}}`, { version: `{{version}}` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`{{slug}}`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`{{slug}}`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-{{lowerCase slug}}` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-{{lowerCase slug}}
{{slug}} --help

# Upgrade to  @latest or any version
npm i -g gobot-{{lowerCase slug}}@latest
```

## CLI

`gobot-{{lowerCase slug}}` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

##CLI##

## API

[Full API docs](https://github.com/benallfree/gobot/blob/{{branch}}/docs/readme.md)

{{{notesMd}}}

## Sample project

View the [{{name}} sample project](https://github.com/benallfree/gobot/tree/{{{branch}}}/src/apps/{{slug}}/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list (currently {{count appSlugs}}) of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

##POSTAMBLE##

## All known releases

`gobot-{{lowerCase slug}}` versions mirror `{{slug}}` versions. Gobot knows about {{count versions}} releases of `{{slug}}`:

{{{releasesMd}}}
