import { join } from 'path'
import { EnvVarNames } from '../../../src/constants'
import { safeRimraf } from '../../../src/util/safeRimraf'
import { GOBOT_TEST_CACHE_ROOT } from '../../run'

export const cleanLocalNpmAndRegistryCache = async () => {
  if (process.env[EnvVarNames.UseNpm]) return
  await safeRimraf(join(GOBOT_TEST_CACHE_ROOT, `**/*`))
}
