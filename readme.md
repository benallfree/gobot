# PocketBase Binary Runner

This package will download the latest binary [PocketBase release](https://github.com/pocketbase/pocketbase/releases) for the current operating system and architecture, and run it.

```bash
npm i -g pbgo
pocketbase --help
```

or (slower)

`npx pbgo --help`

## Where is `pb_data`?

`pocketbase` places `pb_data` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). bash/zsh will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

When in doubt, simply specify `--dir=pb_data` to ensure `pb_data` is created in your current working directory.

```bash
npm i -g pbgo
pocketbase --dir=pb_data serve
```

or

`npx pbgo --dir=pb_data`

## OS X Users

If `pocketbase` does not run, you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception. From then on, all `pbgo` versions should work.

## Upgrading

While `pocketbase --upgrade` might work, it's not recommended. Use `npm i -g pbgo@latest` or `npx pbgo@latest` to flush your local cache and use the latest PocketBase version.

## Why?

If you are writing a nodejs application that depends upon the PocketBase binary being present, you can add this package as a dependency. Then, `pocketbase` will always refer to the corresponding PocketBase binary.

You may also just prefer `npx pbgo@latest` over downloading+unzipping the latest PocketBase version and making sure it is in your shell path.

## Using older PocketBase versions

`pbgo@latest` always points to the latest PocketBase version. To use a specific PocketBase version, do `npx pbgo@0.19.0`. If that version is available, it will be installed.

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
