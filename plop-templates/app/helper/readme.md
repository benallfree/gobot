![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

## `{{name}}` for npm

This package allows you to use [{{slug}}]({{homepage}}) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-{{name}}`:

```bash
npm i gobot-{{name}}
```

With `gobot-{{name}}` present, Gobot will default to the `{{name}}` version corresponding to the `gobot-{{name}}` version you installed.

```js
import { gobot } from 'gobot'
gobot(`{{name}}`).run([`--version`])
```

**Locking to a specific version**

The `gobot-{{name}}` package version always mirrors the underlying `{{name}}` [version](#known-versions):

```bash
npm i gobot-{{name}}@{{version}}
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `{{name}}` even though `gobot-{{name}}` is installed.

```js
// Run a specific version (override)
gobot(`{{name}}`, { version: `0.19.4` }).run([`--version`])

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

Exactly one `gobot-{{name}}` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-{{name}}
{{name}} --help

# Upgrade to  @latest or any version
npm i -g gobot-{{name}}@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-{{name}}` is designed to work with any future version of Gobot.

The published versions of this package mirror the underlying versions of `{{name}}`. That means it is not possible to release updates to this package until/unless the underlying `{{name}}` project also releases a new version.

{{{notesMd}}}

## Known Versions

Gobot knows about {{count versions}} releases of `{{name}}`:

{{csv versions}}

## Sample project

View the [{{slug}} sample project](https://github.com/benallfree/gobot/tree/{{{branch}}}/src/apps/{{name}}/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

{{{availableAppsMd}}}

{{{postambleMd}}}
