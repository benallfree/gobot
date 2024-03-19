import { globSync } from 'glob'
import { basename } from 'path'

export const getSlugsFromFileSystem = () => {
  const sortedSlugs = globSync(`src/apps/*/`)
    .sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))
    .map((path) => basename(path))
  return sortedSlugs
}
