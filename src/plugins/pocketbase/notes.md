### Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pb_data/data.db` will be created in the current directory.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
gobot pocketbase --dir=/path/to/pb_data
```

### Upgrading PocketBase

The `--upgrade` switch is intentionally blocked. Since Gobot always grabs the latest version of PocketBase by default, or the version you specify, the `--upgrade` switch would overwrite Gobot's cached binary and create cache inconsistency.

Use `gobot --g-use-version=x.y.z` from the CLI or `{ version: 'x.y.z' }` from the API to use a specific PocketBase version or semver range.
