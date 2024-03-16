## Quirks

### `$HOME` required

`act` needs the `HOME` environment variable defined. Gobot does NOT automatically forward environment variables, so use this:

```js
gobot(`act`, {
  env: process.env,
}).run([`--help`])
```