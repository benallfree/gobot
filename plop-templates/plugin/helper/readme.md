![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner-300x.png)

# `gobot-{{name}}`

**{{slug}} for Gobot**

_Install, run, and manage `{{name}}` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is {{slug}}?](#what-is-{{slug}})
- [What is Gobot?](#what-is-gobot)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [Options](#options)
  - [Examples](#examples)
- [API](#api)
- [Notes](#notes)
  - [OS X Users](#os-x-users)
  - [Known Versions](#known-versions)
- [Sample project](#sample-project)
- [Try Gobot's other apps](#try-gobots-other-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## What is {{slug}}?

![{{slug}}](https://raw.githubusercontent.com/benallfree/gobot/{{branch}}/src/plugins/{{name}}/logo-50x.png)
[{{homepage}}]({{homepage}})

{{description}}

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{branch}}/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [{{slug}}]({{homepage}}) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-{{name}}
{{name}} --help
```

When installed as a dependency, you get a `{{name}}()` helper that returns a Gobot instance pre-configured for `{{name}}` using the version npm resolved and installed.

```bash
npm i gobot-{{name}}@{{version}}
```

```js
// index.mjs
import { {{name}} } from 'gobot-{{name}}'

const bot = {{name}}()
bot.run([`--help`])
```

## CLI

> ### `{{name}} [gobotOptions] [appOptions]`

### Options

All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

| Option            | Default       | Discussion                                                                                                                                                   |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--g-help`        | Show help     | Display help and options for Gobot                                                                                                                           |
| `--g-os`          | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| `--g-arch`        | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| `--g-v[vv]`       |               | Adjust output verbosity                                                                                                                                      |
| `--g-download`    | `false`       | Download all matching versions and exit                                                                                                                      |
| `--g-refresh`     | `false`       | Clear the gobot cache                                                                                                                                        |
| `--g-use-version` | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| `--g-cache-path`  | host specific | Use the specified directory for cache files.                                                                                                                 |

### Examples

```bash
# Show help for {{name}}
{{name}} --help

# Run in {{name}} debugging mode
 --g-debug {{name}} --help

# Run a specific version of {{name}}
# Note: this technically works, even though this helper package
# defaults to a specific version.
{{name}} --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
{{name}} --g-refresh
```

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/{{{branch}}}/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-{{name}}
npm i gobot-{{name}}@latest
npm i gobot-{{name}}@{{version}}
```

Now you have made `{{name}}` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { {{name}} } from 'gobot-{{name}}'

{{name}}({ env: process.env }).run(['--help'])
```

Reminder: the `{{name}}` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.

{{{notesMd}}}

### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about {{count versions}} releases of `{{name}}`:

{{csv versions}}

## Sample project

View the [{{slug}} sample project](https://github.com/benallfree/gobot/tree/{{{branch}}}/src/plugins/{{name}}/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

{{{availableAppsMd}}}

{{{postambleMd}}}
