import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const SRC_PACKAGE_ROOT = dirname(
  findUpSync(`package.json`, {
    cwd: __dirname,
  }) as string,
)
if (!SRC_PACKAGE_ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}

export const SRC_APPS_ROOT = join(SRC_PACKAGE_ROOT, 'src', 'apps')
if (!existsSync(SRC_APPS_ROOT)) {
  throw new Error(`Can't find ${SRC_APPS_ROOT}`)
}

console.log({ SRC_PACKAGE_ROOT, SRC_APPS_ROOT })
