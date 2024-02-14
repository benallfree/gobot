# PocketBase Binary Runner

This package will download the latest binary [PocketBase release](https://github.com/pocketbase/pocketbase/releases) for the current operating system and architecture, and run it.

```bash
npm i -g pbgo
pbgo --help
```

or (slower)

`npx pbgo --help`

## Why?

If you are writing a nodejs application that depends upon the PocketBase binary being present, you can add this package as a dependency. Then, `pbgo` will always refer to the corresponding PocketBase binary.

## Downloading older versions

Use older versions of this package.
