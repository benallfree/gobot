# PocketBase Binary Runner

This package will download the latest binary [PocketBase release](https://github.com/pocketbase/pocketbase/releases) for the current operating system and architecture, and run it.

```bash
npm i -g pbgo
pocketbase --help
```

or (slower)

`npx pbgo --help`

## Using a specific version of PocketBase

You can force `pbgo` to fetch a specific version by using `--version=x.y.z`.

`npx pbgo --version=0.21.0`

## Refreshing the version cache

By default, `pbgo` will perform a live check once every 24h for a new version of PocketBase. If you want to do it sooner, use:

`npx pbgo --refresh`

## Programmatic API

### `run()`

```js
import { run } from 'pbgo'

// Run the latest version of PocketBase
const args = [
  `serve`,
  `--http`,
  `0.0.0.0:8090`,
  `--dir`,
  `/path/to/pb_data`,
  `--hooksDir`,
  `/path/to/pb_hooks`,
  `--migrationsDir`,
  `/path/to/pb_migrations`,
  `--publicDir`,
  `/path/to/pb_public`,
]
if (process.env.NODE_ENV === 'development') {
  args.push(`--dev`)
}
console.log(args)
const process = run(args)
```

### `getPath()`

Returns a Promise that will automatically download the appropriate binary for your platform if it has not been downloaded yet.

```js
import { getPath } from 'pbgo'

// Run the latest version of PocketBase
getPath().then((binPath) => {
  console.log(`pocketbase binary is located in ${binPath}`)
})

// Run a specific version of PocketBase
getPath({ version: `0.22.3` }).then((binPath) => {
  console.log(`pocketbase binary is located in ${binPath}`)
})

// Purge the cache. Check for latest version and download binary
getPath({ refresh: true }).then((binPath) => {
  console.log(`pocketbase binary is located in ${binPath}`)
})

// Enable debugging output
getPath({ debug: true }).then((binPath) => {
  console.log(`pocketbase binary is located in ${binPath}`)
})
```

## Debugging

```bash
npx pbgo --debug
```

or

```js
getPath({ debug: true })
```

## Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pbgo` will default to creating `pb_data/data.db` in the current directory instead.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
npm i -g pbgo
pocketbase --dir=/path/to/pb_data serve
```

or

`npx pbgo --dir=/path/to/pb_data`

## OS X Users

If `pocketbase` does not run, you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception. From then on, all `pbgo` versions should work.

## Upgrading

While `pocketbase --upgrade` might work, do not use it. `pbgo` will grab the latest version by default. Use `--version=x.y.z` from the CLI or `getPath(version)`) npm i -g pbgo@latest`or`npx pbgo@latest` to refresh your local cache and use the latest PocketBase version.

## Why?

If you are writing a nodejs application that depends upon the PocketBase binary being present, you can add this package as a dependency. Then, `pocketbase` will always refer to the corresponding PocketBase binary.

You may also just prefer `npx pbgo@latest` over downloading+unzipping the latest PocketBase version and making sure it is in your shell path.

## Contributing

We could use help testing and making sure this works across lots of platforms.

I also need help publishing earlier versions of the package matching PocketBase versions.

To test a build locally:

```bash
npm rm -g pbgo
npm pack
npm i -g pbgo-0.21.3-alpha.7.tgz --foreground-scripts
pocketbase --help
```
