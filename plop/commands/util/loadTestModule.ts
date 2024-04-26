import { join } from 'path'
import { pathToFileURL } from 'url'
import { type TestConfig } from '../../../src/TestConfig'
import { mergeConfig } from '../../../src/api'

export async function loadTestModule(appPath: string) {
  const testConfigPath = join(appPath, `test-config.ts`)
  const testConfigUrl = pathToFileURL(testConfigPath).href
  const module = await import(testConfigUrl).catch((e) => {
    //Noop, if module is not found
  })
  return mergeConfig<TestConfig>(
    { args: [`--version`], code: 0, skip: false },
    module?.default,
  )
}
