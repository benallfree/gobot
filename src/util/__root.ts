import { findUpSync } from 'find-up'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const __root = (() => {
  const root = findUpSync(`package.json`, { cwd: __dirname })
  if (!root) {
    throw new Error(`Cannot find project root`)
  }
  return dirname(root)
})()
