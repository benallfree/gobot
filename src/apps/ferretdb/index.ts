import type { AppInfo } from '../'
import { mkFerretdb } from './overrides'

export const ferretdb: AppInfo = {
  name: 'FerretDB',
  description: `A truly Open Source MongoDB alternative`,
  homepage: `https://www.ferretdb.com`,
  isAlpha: true,
  factory: mkFerretdb,
}
