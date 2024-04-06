import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { parse } from 'yaml'
import { safeRimraf } from '../../../src/util/safeRimraf'
import { fn } from './fn'

const VERDACCIO_CONFIG_PATH = `verdaccio.config.yaml`

async function _cleanVerdaccioPackages(packageNames: any[]) {
  const configYaml = parse(readFileSync(VERDACCIO_CONFIG_PATH).toString())
  const { storage } = configYaml
  const dbPath = join(storage, `.verdaccio-db.json`)
  if (existsSync(dbPath)) {
    const db = JSON.parse(readFileSync(dbPath).toString()) as { list: string[] }
    const newDb = {
      ...db,
      list: db.list.filter((item) => !packageNames.includes(item)),
    }
    writeFileSync(dbPath, JSON.stringify(newDb, null, 2))
  }
  const storagePathsToDelete = packageNames.map((packageName) =>
    join(storage, packageName),
  )
  await Promise.all(storagePathsToDelete.map((path) => safeRimraf(path)))
  return `cleaned verdaccio ${packageNames.join(`,`)}`
}

export const cleanVerdaccioPackages = (packages: string[]) => {
  return fn(() => _cleanVerdaccioPackages(packages))
}
