Hello, this is a courtesy message to say that support for reviewdog has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot reviewdog --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use reviewdog as a 1st class project dependency. They can lock to a specific version of reviewdog by installing the helper package [https://npmjs.org/gobot-reviewdog](https://npmjs.org/gobot-reviewdog).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 33 releases of reviewdog and I will back-publish all of them after a brief testing and commentary period.

**Run `reviewdog` via npx**

```bash
npx gobot reviewdog --help
```

**Install `reviewdog` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-reviewdog
reviewdog --help
```

**Use `reviewdog` in an npm project**

```bash
npm i gobot gobot-reviewdog@0.17.2
```

```js
import { gobot } from 'gobot'
gobot(`reviewdog`, {
  env: process.env,
}).run([`--help`])
```



## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update reviewdog installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the reviewdog installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make reviewdog even more popular!
