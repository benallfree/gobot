import { readFileSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { rimraf } from 'rimraf'
import { parse } from 'yaml'

export async function cleanVerdaccioPackages(packageNames: any[]) {
  const configPath = resolve(
    process.env.HOME!,
    `.config`,
    `verdaccio`,
    `config.yaml`,
  )
  const configYaml = parse(readFileSync(configPath).toString())
  const { storage } = configYaml
  const dbPath = join(storage, `.verdaccio-db.json`)
  const db = JSON.parse(readFileSync(dbPath).toString()) as { list: string[] }
  const newDb = {
    ...db,
    list: db.list.filter((item) => !packageNames.includes(item)),
  }
  writeFileSync(dbPath, JSON.stringify(newDb, null, 2))

  const storagePathsToDelete = packageNames.map((packageName) =>
    join(storage, packageName),
  )
  await Promise.all(storagePathsToDelete.map((path) => rimraf(path)))
}
