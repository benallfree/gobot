import { mkdirSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process'

export const pwd = () => resolve(cwd())
export const mkdir = (path: string) => mkdirSync(path, { recursive: true })
