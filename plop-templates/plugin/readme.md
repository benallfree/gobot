![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

# {{{slug}}} plugin for Gobot

_Install, run, and manage `{{{name}}}` as an npm package with CLI and API interfaces._

## What is {{{slug}}}?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/src/plugins/{{{name}}}/logo-50x.png)

{{{description}}}

## Quickstart

This plugin provides [{{{slug}}}]({{{homepage}}}) support to [Gobot](https://github.com/benallfree/gobot). It is built in to Gobot.

Straight from npx:

```bash
npx gobot {{{name}}} --help
```

Or install globally:

```bash
npm i -g gobot
gobot {{{name}}} --help
```

Or use the `gobot-{{{name}}}` helper package to get a CLI bin alias (the main Gobot package omits specific bin aliases to avoid CLI name pollution):

```bash
npm i -g gobot-{{{name}}}
{{{name}}} --help

# --g- options work too
{{{name}}} --g-vvv --help
```

Or programmatically:

```bash
npm i gobot-{{name}}
npx gobot init {{{name}}}
```

```js
// index.mjs
import { gobot } from 'gobot'

gobot(`{{{name}}}`, { env: process.env }).run({{{jsonStringify sample_args}}})
```

## Introduction

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## CLI

> ### `gobot [gobotOptions] <app> [appOptions]`

### Options

{{{cli_options}}}

### Examples

```bash
# Show help for {{{name}}}
gobot {{{name}}} --help

# Run in gobot debugging mode
gobot --g-debug {{{name}}} --help

# Run a specific {{{app}}} version
gobot --g-version="{{{semver}}}" {{{name}}} --help

# Force gobot to dump cache and refresh {{{app}}} tags and binaries
gobot --g-refresh {{{app}}}
```

## API

[Full API Docs](https://github.com/pockethost/gobot/blob/{{{branch}}}/docs/modules.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies.

Inside your project, use the Gobot helper to add support for `{{{name}}}`:

```bash
npx gobot init {{{name}}}
```

The above command will find the latest version of {{{slug}}} and modify your `package.json` as follows:

```json
{
  "dependencies": {
    "gobot": "latest"
  },
  "gobot": {
    "{{{name}}}": {
      "version": "{{{semver}}}"
    }
  }
}
```

Now you have made `{{{name}}}` a dependency of your package. When your package is installed, Gobot will dynamically select the correct binary build for the user's OS and architecture, in the version you specified, and store it. You can run it easily from within your code, or externally using CLI tools as shown above.

```js
// index.mjs
import { gobot } from 'gobot'

gobot(`{{{name}}}`, { env: process.env }).run({{{jsonStringify sample_args}}})
```

Here are some helpful `package.json` scripts to consider:

```json
  "scripts": {
    "serve": "node ./index.mjs",
    "{{{name}}}": "gobot {{{name}}}"
  }
```

## Notes about `{{{slug}}}` support

{{{notes}}}

## Sample project

View the [{{{slug}}} sample project](https://github.com/benallfree/gobot/tree/{{{branch}}}/src/plugins/{{{name}}}/sample-project) on github.

## Supported Apps

Gobot has a growing list of apps. Have you tried them all?

{{{apps}}}

{{{postamble}}}
