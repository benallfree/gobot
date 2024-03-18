## Quirks

### Versioning

{{slug}} uses date-based version tags. npm requires semver, so Gobot converts them.

Format:

| major  | minor    | patch          |
| ------ | -------- | -------------- |
| `YYYY` | `M[M]`\* | `D[D]HHMMSS`\* |

\* Note: `M[M]` and `D[D]` are 1 digit for months 1-9 and 2 digits for moths 10-12 because semver doesn't support leading zeros.

Example:

| Original {{slug}} release tag  | Gobot version                           | Note |
| ------------------------------ | --------------------------------------- | ---- |
| `RELEASE.2024-03-11T11_34_09Z` | `2024.3.11113409`<br/>`_____^_______^^` | \*   |
| `RELEASE.2017-12-08T01-21-00Z` | `2017.12.8012100`<br/>`________^^^____` | \*\* |

> \* `M[M]` is `3` not `03` because it would create a leading `0` in the _minor_ semver part. However, the `SS` portion of the _patch_ part is still `09` because it's not a leading `0`.

> \*\* `D[D]` is `8` not `08` because it would create a leading `0` in the _patch_ semver part. However, the `HH` portion of the _patch_ part is still `01` because it's not a leading `0`.
