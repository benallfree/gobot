import { readFileSync, writeFileSync } from 'fs'
import * as _prettier from 'prettier'
import { fn } from './fn'

const formatFile = async (path: string) => {
  const text = readFileSync(path, 'utf8')
  const options = await _prettier.resolveConfig(path)
  if (!options) throw new Error(`Expected options`)
  const formatted = await _prettier.format(text, {
    ...options,
    trailingComma: 'all',
    filepath: path,
  })
  writeFileSync(path, formatted)
  return `prettier ${path}`
}

export const prettier = (path: string) => fn(() => formatFile(path))
