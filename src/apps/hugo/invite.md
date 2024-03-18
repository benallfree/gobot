Hello, this is a courtesy message to say that support for Hugo has been added to the [Gobot project](https://www.npmjs.com/package/gobot) 🎸

You can try it now:

```bash
npx gobot hugo --help
```

Gobot installs and runs popular statically-linked binaries via npm/npx, accounting for the target platform and architecture and selecting the correct build for the requested version. See our list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps).

npm users can also use Hugo as a 1st class project dependency. They can lock to a specific version of Hugo by installing the helper package [https://npmjs.org/gobot-hugo](https://npmjs.org/gobot-hugo).

The helper package version mirrors your version numbers. As of this writing, Gobot has indexed 213 releases of Hugo and I will back-publish all of them after a brief testing and commentary period.

**Run `hugo` via npx**

```bash
npx gobot hugo --help
```

**Install `hugo` globally**:

To avoid CLI name pollution, Gobot only makes bin aliases when the user specifically installs the helper package.

```bash
npm i -g gobot gobot-hugo
hugo --help
```

**Use `hugo` in an npm project**

```bash
npm i gobot gobot-hugo@0.124.0
```

```js
import { gobot } from 'gobot'
gobot(`hugo`, {
  env: process.env,
}).run([`--help`])
```

## Quirks

### Extended Edition

Hugo is available in two editions: standard and [extended](https://gohugo.io/troubleshooting/faq/#an-error-message-indicates-that-a-feature-is-not-available-why). With the extended edition you can (a) encode to the WebP format when processing images, and (b) transpile Sass to CSS using the embedded LibSass transpiler. The extended edition is not required to use the Dart Sass transpiler.

Hugo Extended is selected by default when available.

If you'll be using the SCSS features of Hugo Extended, it's probably smart to install [`postcss`](https://www.npmjs.com/package/postcss), [`postcss-cli`](https://www.npmjs.com/package/postcss-cli), and [`autoprefixer`](https://www.npmjs.com/package/autoprefixer) as devDependencies too, since they can be conveniently called via [built-in Hugo pipes](https://gohugo.io/hugo-pipes/postcss/):

```sh
npm install postcss postcss-cli autoprefixer --save-dev
# or...
yarn add postcss postcss-cli autoprefixer --dev
```


## What's next

- **Test & Feedback.** Please test and review as you are able. I have tagged things as alpha for now, but I will promote it to stable after a brief testing period.
- **Update Hugo installation docs.** Please consider adding Gobot to your official install instructions. If you would like me to send a PR updating the Hugo installation docs to include instructions for installation via Gobot, I'm happy to do that.
- **Give Gobot a 💫.** Gobot is a big effort to solve binary dependencies for nodejs in a universal way. Please consider giving [the Gobot project](https://github.com/benallfree/gobot) a star if it resonates.
- **Keep going.** Keep doing what you do! Gobot will automatically pick up and publish your new releases.

Thanks for the great project and I hope this helps make Hugo even more popular!
