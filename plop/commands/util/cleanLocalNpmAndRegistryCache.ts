import { join } from 'path'
import { Flags } from '../../../src/util/flags'
import { safeRimraf } from '../../../src/util/safeRimraf'
import { GOBOT_TEST_CACHE_ROOT } from '../../run'

export const cleanLocalNpmAndRegistryCache = async () => {
  if (process.env[Flags.UseNpm]) return
  await safeRimraf(join(GOBOT_TEST_CACHE_ROOT, `**/*`))
}
