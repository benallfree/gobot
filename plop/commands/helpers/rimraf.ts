import type { CustomActionFunction } from 'plop'
import { safeRimraf } from '../../../src/util/safeRimraf'

export const rimraf =
  (path: string): CustomActionFunction =>
  async (answers, { onProgress }) => {
    onProgress(`Removing ${path}`)
    await safeRimraf(path)
    return `Removed ${path}`
  }
