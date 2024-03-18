Hello, this is a courtesy message to say that support for Restic has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot restic --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use Restic as a 1st class project dependency. They can lock to a specific version of Restic by installing the helper package [https://npmjs.org/gobot-restic](https://npmjs.org/gobot-restic).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 42 releases of Restic and I will back-publish all of them after a brief testing and commentary period.

**Run `restic` via npx**

```bash
npx gobot restic --help
```

**Install `restic` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-restic
restic --help
```

**Use `restic` in an npm project**

```bash
npm i gobot gobot-restic@0.16.4
```

```js
import { gobot } from 'gobot'
gobot(`restic`, {
  env: process.env,
}).run([`--help`])
```



## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update Restic installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the Restic installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make Restic even more popular!
