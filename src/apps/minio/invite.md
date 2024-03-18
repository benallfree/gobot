Hello, this is a courtesy message to say that support for Minio has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot minio --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use Minio as a 1st class project dependency. They can lock to a specific version of Minio by installing the helper package [https://npmjs.org/gobot-minio](https://npmjs.org/gobot-minio).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 464 releases of Minio and I will back-publish all of them after a brief testing and commentary period.

**Run `minio` via npx**

```bash
npx gobot minio --help
```

**Install `minio` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-minio
minio --help
```

**Use `minio` in an npm project**

```bash
npm i gobot gobot-minio@2024.3.15010719
```

```js
import { gobot } from 'gobot'
gobot(`minio`, {
  env: process.env,
}).run([`--help`])
```

## Quirks

### Versioning

Minio uses date-based version tags. npm requires semver, so Gobot converts them.

Format:

| major  | minor    | patch          |
| ------ | -------- | -------------- |
| `YYYY` | `M[M]`\* | `D[D]HHMMSS`\* |

\* Note: `M[M]` and `D[D]` are 1 digit for months 1-9 and 2 digits for moths 10-12 because semver doesn't support leading zeros.

Example:

| Original Minio release tag  | Gobot version                           | Note |
| ------------------------------ | --------------------------------------- | ---- |
| `RELEASE.2024-03-11T11_34_09Z` | `2024.3.11113409`<br/>`_____^_______^^` | \*   |
| `RELEASE.2017-12-08T01-21-00Z` | `2017.12.8012100`<br/>`________^^^____` | \*\* |

> \* `M[M]` is `3` not `03` because it would create a leading `0` in the _minor_ semver part. However, the `SS` portion of the _patch_ part is still `09` because it's not a leading `0`.

> \*\* `D[D]` is `8` not `08` because it would create a leading `0` in the _patch_ semver part. However, the `HH` portion of the _patch_ part is still `01` because it's not a leading `0`.


## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update Minio installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the Minio installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make Minio even more popular!
