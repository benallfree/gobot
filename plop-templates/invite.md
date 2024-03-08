Hello, this is a courtesy message to say that support for `{{{app}}}` has been added to the [Gobot project](https://github.com/benallfree/gobot) 🎸

Gobot installs and runs popular statically-linked binaries via npm/npx.

You can try it now:

```bash
npx gobot {{{app}}} --help
```

or

```bash
npm i -g gobot
gobot {{{app}}} --help
```

npm package authors can now include `{{{app}}}` as a primary dependency in their npm projects. The `{{{app}}}` binary matching user's operating system and architecture, along with the version specified in the author's `package.json`, will be automatically downloaded and installed when needed.

```json
// example package.json
{
  "dependencies": {
    "gobot": "~1.0"
  },
  "gobot": {
    "{{{app}}}": {
      "version": "{{{semver}}}"
    }
  }
}
```

If you would like me to send a PR updating the `{{{app}}}` installation docs to include instructions for installation via Gobot, please let me know.

**About Gobot**

Gobot installs and runs popular statically-linked binaries via npm/npx. It auto-detects the host os/arch and allows easy CLI and programmatic access to binary dependencies. [esbuild](https://github.com/evanw/esbuild) was a source of inspiration to this more generalized approach.

Gobot boosts adoption of supported projects by lowering the friction of manual external binary dependency management. No more installing separate binary dependencies.
