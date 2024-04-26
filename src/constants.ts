import envPaths from 'env-paths'
import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { platform } from 'process'
import { fileURLToPath } from 'url'

export const EnvVarNames = {
  // https://github.com/nodejs/node/issues/20605#issuecomment-387489708
  Path: platform === 'win32' ? 'Path' : 'PATH',
  ReallyPublish: 'GOBOT_PUBLISH_CONFIRM',
  Verbosity: 'GOBOT_VERBOSITY',
  UseNpm: 'GOBOT_USE_NPM',
  NpmRegistryEndpoint: `npm_config_registry`,
  NpmLocalRoot: `npm_config_prefix`,
  PlopFilter: `__PLOP_FILTER__`,
} as const

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const DIST_PACKAGE_ROOT = dirname(
  findUpSync(`package.json`, {
    cwd: __dirname,
  }) as string,
)
if (!DIST_PACKAGE_ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}

export const DIST_APPS_ROOT = join(DIST_PACKAGE_ROOT, 'dist', 'apps')
if (!existsSync(DIST_APPS_ROOT)) {
  console.warn(`Warning: can't find ${DIST_APPS_ROOT}`)
}

export const COMPRESSED_ARCHIVE_EXTS = [`.zip`, `.tgz`, `.bz2`, `.gz`, `.xz`]

export const CACHE_ROOT = (...paths: string[]) =>
  resolve(envPaths('gobot').cache, ...paths)

console.log({
  DIST_PACKAGE_ROOT,
  DIST_APPS_ROOT,
  COMPRESSED_ARCHIVE_EXTS,
  CACHE_ROOT: CACHE_ROOT(),
})
