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
