import type { AppInfoMeta } from '../../../../../src/util/cliForApp'
import { version } from './version'

export const meta: AppInfoMeta = {
  name: `{{name}}`,
  homepage: `{{homepage}}`,
  slug: `{{slug}}`,
  version,
}
