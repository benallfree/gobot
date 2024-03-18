Hello, this is a courtesy message to say that support for PocketBase has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot pocketbase --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use PocketBase as a 1st class project dependency. They can lock to a specific version of PocketBase by installing the helper package [https://npmjs.org/gobot-pocketbase](https://npmjs.org/gobot-pocketbase).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 127 releases of PocketBase and I will back-publish all of them after a brief testing and commentary period.

**Run `pocketbase` via npx**

```bash
npx gobot pocketbase --help
```

**Install `pocketbase` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-pocketbase
pocketbase --help
```

**Use `pocketbase` in an npm project**

```bash
npm i gobot gobot-pocketbase@0.22.4
```

```js
import { gobot } from 'gobot'
gobot(`pocketbase`, {
  env: process.env,
}).run([`--help`])
```

## Quirks

### Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pb_data/data.db` will be created in the current directory.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
gobot pocketbase --dir=/path/to/pb_data
```

### Upgrading PocketBase

The `--upgrade` switch is intentionally blocked because using it would overwrite Gobot's cached binary and create cache inconsistency.

Instead, specify the version you wish to use either via CLI or programmatically and Gobot will fetch it when necessary.


## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update PocketBase installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the PocketBase installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make PocketBase even more popular!
