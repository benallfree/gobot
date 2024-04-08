import { readFileSync, writeFileSync } from 'fs'
import type { CustomActionFunction } from 'plop'
import * as _prettier from 'prettier'

export const prettier =
  (path: string): CustomActionFunction =>
  async (answers, { onProgress }) => {
    onProgress(`prettier ${path}...`)
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
