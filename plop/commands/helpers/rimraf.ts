import { safeRimraf } from '../../../src/util/safeRimraf'
import { fn } from './fn'

export const rimraf = (path: string) =>
  fn(() => safeRimraf(path).then(() => `Removed ${path}`))
