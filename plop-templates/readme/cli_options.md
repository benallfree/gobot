| Option            | Default   | Discussion                                                                                                                                                   |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--g-os <os>`     | host OS   | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| `--g-arch <arch>` | host arch | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| `--g-download`    | `false`   | Download all matching versions and exit                                                                                                                      |
| `--g-refresh`     | `false`   | Clear the gobot cache                                                                                                                                        |
| `--g-use-version` | latest    | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
