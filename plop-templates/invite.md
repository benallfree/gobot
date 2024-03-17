Hello, this is a courtesy message to say that **alpha** support for {{slug}} has been added to the [Gobot project](https://www.npmjs.com/package/gobot)'s roster of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps) 🎸

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version.

As of this writing, Gobot knows about {{count versions}} releases of {{slug}}.

npm users can also use {{slug}} as a 1st class project dependency. They can lock to a specific version of {{slug}} by installing the helper package [https://npmjs.org/gobot-{{lowerCase name}}](https://npmjs.org/gobot-{{lowerCase name}}). The helper package version mirrors your version numbers and I will back-publish package versions for all {{count versions}} releases after a brief testing period.

**Run `{{name}}` via npx**

```bash
npx gobot {{name}} --help
```

**Install `{{name}}` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-{{lowerCase name}}
{{name}} --help
```

**Use `{{name}}` in a project**

```bash
npm i gobot gobot-{{lowerCase name}}@{{version}}
```

```js
import { gobot } from 'gobot'
gobot(`{{name}}`, {
  env: process.env,
})([`--help`])
```

## What's next

- **Testing.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Install docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the {{slug}} installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make {{slug}} even more popular!
