import type { AppInfo } from '..'

export const litefs: AppInfo = {
  name: 'litefs',
  description: `FUSE-based file system for replicating SQLite databases across a cluster of machines`,
  homepage: `https://github.com/superfly/litefs`,
  isAlpha: true,
  factory: `superfly/litefs`,
}
