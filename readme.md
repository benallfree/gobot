# PocketBase Binary Runner

This package will download the latest binary [PocketBase release](https://github.com/pocketbase/pocketbase/releases) for the current operating system and architecture, and run it.

```bash
npm i -g pbgo
pocketbase --help
```

or (slower)

`npx pbgo --help`

## CLI Usage

**Switches**

| Option        | Default   | Discussion                                                                                                                                                       |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --os          | host OS   | `windows, linux, darwin`                                                                                                                                         |
| --arch        | host arch | `amd64, arm64, arm7`                                                                                                                                             |
| --debug       | `false`   | Enable debugging output                                                                                                                                          |
| --refresh     | `false`   | Refresh PocketBase tags and binary                                                                                                                               |
| --use-version | latest    | Run a specific PocketBase version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |

All other switches and arguments are forwarded directly to the `pocketbase` binary.

**Examples**

```bash
# Run `pocketbase serve`
npx pbgo serve

# Run in pbGo debugging mode`
npx pbgo --debug

# Run `pocketbase --help`
npx pbgo --help

# Run a specific PocketBase version
npx pbgo --use-version="0.21.0" # Run this exact version
npx pbgo --use-version="~0.21.0" # Run highest 0.21.z version
npx pbgo --use-version="0.*" # Run highest 0.y.z

# Force pbGo to dump cache and refresh PocketBase tags and binaries
npx pbgo --refresh

# List available PocketBase versions
npx pbgo versions
npx pbgo versions --json # Output in JSON format
```

## Programmatic API

**Config**

| Option    | Default       | Discussion                                                                                                                                                       |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| os        | host OS       | `windows, linux, darwin`                                                                                                                                         |
| arch      | host arch     | `amd64, arm64, arm7`                                                                                                                                             |
| debug     | `false`       | Enable debugging output                                                                                                                                          |
| refresh   | `false`       | Refresh PocketBase tags and binary                                                                                                                               |
| version   | latest        | Run a specific PocketBase version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| cachePath | host-specific | Set the cache path used by pbGo                                                                                                                                  |
| env       | `{}`          | Hash of env vars to forward to PocketBase                                                                                                                        |

### `run(args:string[], options?: Partial<Config>)`

Run PocketBase, passing `args` to the PocketBase process.

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
const process = run(args, { debug: true, env: { FOO: 'bar' } })
```

### `getPocketBasePath(options?: Partial<Config>): Promise<string>`

Returns the path to the requested PocketBase binary. It will automatically download the appropriate binary for your platform if it has not been downloaded yet.

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

// Run the highest matching version of PocketBase 0.22.z
getPath({ version: `0.22.*` }).then((binPath) => {
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

### `getAvailableVersions(options?: Partial<Config>): Promise<string[]>`

Returns an array of available versions, ordered latest to oldest. Most `Config` values have no effect.

### `getAvailableVersionsPath(options?: Partial<Config>): Promise<string>`

Returns a path to a JSON file containing all the versions. Most `Config` values have no effect.

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

## Upgrading PocketBase

While `npx pbgo --upgrade` is intentionally blocked. `pbgo` always grabs the latest version of PocketBase by default. Use `npx pbgo --version=x.y.z` from the CLI or `getPocketBasePath({version: 'x.y.z'})` to use a specific PocketBase version.

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
