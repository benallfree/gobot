import { globSync } from 'glob'
import { basename } from 'path'
import { plopFilter } from './plopFilter'

export const getSlugsFromFileSystem = () => {
  const sortedSlugs = globSync(`src/apps/${plopFilter()}/`)
    .sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))
    .map((path) => basename(path))
  return sortedSlugs
}
