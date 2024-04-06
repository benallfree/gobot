import { findUpSync } from 'find-up'
import { dirname, resolve } from 'path'

const __dirname = dirname(resolve(new URL(import.meta.url).pathname))

export const __root = (() => {
  const root = findUpSync(`package.json`, { cwd: __dirname })
  if (!root) {
    throw new Error(`Cannot find project root`)
  }
  return dirname(root)
})()
