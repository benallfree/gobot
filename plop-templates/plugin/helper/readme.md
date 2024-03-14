![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

# `gobot-{{name}}`

## `{{name}}` as an npm package

This is an optional [Gobot](https://github.com/benallfree/gobot) helper used when you want [{{slug}}]({{homepage}}) to be a dependency in your project.

With it, you can ensure that `{{name}}` is always installed and available to your application, in the specific version (or range) you require.

`{{name}}` can also be surfaced as a CLI alias by installing this package globally.

## Usage

**Basic version locking**

Install `gobot` and `gobot-{{name}}`:

```bash
npm i gobot gobot-{{name}}
```

Then, use Gobot normally:

```js
import { gobot } from 'gobot'

/**
 * With `gobot-{{name}} present, Gobot will default
 * to the `{{name}}` version corresponding to
 * `package.version`
 */
gobot(`{{name}}`).run([`--version])
```

**Locking to a specific version**

The `gobot-{{name}}` package version always mirrors the underlying `{{name}}` version:

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

`gobot-{{name}}` is designed to work with any future version of `gobot`.

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
