import { mkdirSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process'
import { rimrafSync } from 'rimraf'

export const pwd = () => resolve(cwd())
export const mkdir = (path: string) => mkdirSync(path, { recursive: true })
export { rimrafSync }
