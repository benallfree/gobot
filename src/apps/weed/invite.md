Hello, this is a courtesy message to say that support for SeaweedFS has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot weed --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use SeaweedFS as a 1st class project dependency. They can lock to a specific version of SeaweedFS by installing the helper package [https://npmjs.org/gobot-weed](https://npmjs.org/gobot-weed).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 244 releases of SeaweedFS and I will back-publish all of them after a brief testing and commentary period.

**Run `weed` via npx**

```bash
npx gobot weed --help
```

**Install `weed` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-weed
weed --help
```

**Use `weed` in an npm project**

```bash
npm i gobot gobot-weed@3.64.0
```

```js
import { gobot } from 'gobot'
gobot(`weed`, {
  env: process.env,
}).run([`--help`])
```

## Quirks

### Versioning

SeaweedFS uses two-part versions, but Gobot and npm require three-part semver. A `.0` _patch_ part has been added for compatibility.


## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update SeaweedFS installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the SeaweedFS installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make SeaweedFS even more popular!
