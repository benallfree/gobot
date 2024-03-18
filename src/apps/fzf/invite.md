Hello, this is a courtesy message to say that support for fzf has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot fzf --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use fzf as a 1st class project dependency. They can lock to a specific version of fzf by installing the helper package [https://npmjs.org/gobot-fzf](https://npmjs.org/gobot-fzf).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 39 releases of fzf and I will back-publish all of them after a brief testing and commentary period.

**Run `fzf` via npx**

```bash
npx gobot fzf --help
```

**Install `fzf` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-fzf
fzf --help
```

**Use `fzf` in an npm project**

```bash
npm i gobot gobot-fzf@0.48.1
```

```js
import { gobot } from 'gobot'
gobot(`fzf`, {
  env: process.env,
}).run([`--help`])
```



## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update fzf installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the fzf installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make fzf even more popular!