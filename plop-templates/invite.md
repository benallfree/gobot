Hello, this is a courtesy message to say that support for `{{name}}` has been added to the [Gobot project](https://github.com/benallfree/gobot). Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested `{{name}}` version.

I have also published an NPM helper package at [https://npmjs.org/gobot-{{name}}](https://npmjs.org/gobot-{{name}}). As of this post, Gobot knows about {{count versions}} releases of `{{name}}`. The helper package has matching versions so users can add specific versions of `{{name}}` as a dependency 🎸

From npx:

```bash
npx gobot {{name}} --help
```

or globally as `{{name}}`:

```bash
npm i -g gobot-{{name}}

# This is only available if the user installs `gobot-{{name}}`, to avoid CLI pollution.
{{name}} --help
```

or used in a project:

```bash
npm i gobot-{{name}}@{{version}}
```

```js
import { {{name}} } from 'gobot-{{name}}'
{{name}}([`--help`])
```

If you would like me to send a PR updating the `{{name}}` installation docs to include instructions for installation via Gobot, please let me know!

Thanks for the great project.
