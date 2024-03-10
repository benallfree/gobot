## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## OS X Users

If a Gobot does not run, or one of its apps does not run, it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already compatible with Gobot. Send us a PR.

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```
