import { resolve } from 'path'
import { getReleaseTags } from './getReleaseTags'
import { cachePath } from './settings/cache'
export { getPocketBasePath } from './getPocketBasePath'
export { run } from './run.js'
export { arch } from './settings/arch'
export { clearCache } from './settings/cache'
export { os } from './settings/os'
export { version } from './settings/version'

export const getAvailableVersionsPath = () =>
  resolve(cachePath(), `versions.json`)

export const getAvailableVersions = getReleaseTags
