import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import type { CustomActionFunction } from 'plop'
import { parse } from 'yaml'
import { __root } from '../../../src/util/__root'
import { safeRimraf } from '../../../src/util/safeRimraf'
import { GOBOT_TEST_CACHE_ROOT } from '../../run'

const VERDACCIO_CONFIG_PATH = `verdaccio.config.yaml`

export const cleanVerdaccioPackages = (
  packageNames: string[],
): CustomActionFunction => {
  return async (answers, { onProgress }) => {
    onProgress(`Cleaning verdaccio packages ${packageNames.join(`, `)}`)
    const configYaml = parse(readFileSync(VERDACCIO_CONFIG_PATH).toString())
    const { storage } = configYaml
    const dbPath = join(storage, `.verdaccio-db.json`)
    if (existsSync(dbPath)) {
      const db = JSON.parse(readFileSync(dbPath).toString()) as {
        list: string[]
      }
      const newDb = {
        ...db,
        list: db.list.filter((item) => !packageNames.includes(item)),
      }
      writeFileSync(dbPath, JSON.stringify(newDb, null, 2))
    }
    const storagePathsToDelete = packageNames.map((packageName) =>
      join(storage, packageName),
    )
    onProgress(`Deleting paths: ${storagePathsToDelete.join(`, `)}`)
    await Promise.all(
      storagePathsToDelete.map((path) => {
        onProgress(`Deleting ${path}`)
        return safeRimraf(path, [GOBOT_TEST_CACHE_ROOT, __root])
      }),
    )
    return `cleaned verdaccio ${packageNames.join(`,`)}`
  }
}
