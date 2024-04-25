import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import type { CustomActionFunction } from 'plop'
import { parse } from 'yaml'
import {} from '../../../src/util/getApp'
import { safeRimraf } from '../../../src/util/safeRimraf'
import { SRC_PACKAGE_ROOT } from './root'

const VERDACCIO_CONFIG_PATH = `verdaccio.config.yaml`

export const cleanVerdaccioPackages = (
  packageNames: string[],
): CustomActionFunction => {
  return async (answers, { onProgress }) => {
    onProgress(`Cleaning verdaccio packages ${packageNames.join(`, `)}`)
    const configYaml = parse(readFileSync(VERDACCIO_CONFIG_PATH).toString())
    const { storage } = configYaml
    const dbPath = resolve(SRC_PACKAGE_ROOT, storage, `.verdaccio-db.json`)
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
      resolve(SRC_PACKAGE_ROOT, storage, packageName),
    )
    onProgress(`Deleting paths: ${storagePathsToDelete.join(`, `)}`)
    await Promise.all(
      storagePathsToDelete.map((path) => {
        onProgress(`Deleting ${path}`)
        return safeRimraf(path)
      }),
    )
    return `cleaned verdaccio ${packageNames.join(`,`)}`
  }
}
