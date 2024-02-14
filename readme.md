# PocketBase Binary Runner

This package will download the latest binary [PocketBase release](https://github.com/pocketbase/pocketbase/releases) for the current operating system and architecture, and run it.

```bash
npm i -g pbgo
pbgo --help
```

or (slower)

`npx pbgo --help`

## OS X Users

If `pbgo` does not run, you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception. From then on, all `pbgo` versions should work.

## Upgrading

While `pbgo --upgrade` might work, it's not recommended. Use `npm i -g pbgo@latest` or `npx pbgo@latest` to flush your local cache and use the latest PocketBase version.

## Why?

If you are writing a nodejs application that depends upon the PocketBase binary being present, you can add this package as a dependency. Then, `pbgo` will always refer to the corresponding PocketBase binary.

You may also just prefer `npx pbgo@latest` over downloading+unzipping the latest PocketBase version and making sure it is in your shell path.

## Using older PocketBase versions

`pbgo@latest` always points to the latest PocketBase version. To use a specific PocketBase version, do `npx pbgo@0.19.0`. If that version is available, it will be installed.

## Contributing

We could use help testing and making sure this works across lots of platforms. I also need help publishing earlier versions of the package matching PocketBase versions.
