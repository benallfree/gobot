import { cloneDeep } from '@s-libs/micro-dash'
import { PluginFactory } from '.'
import {
  DEFAULT_PLATFORM_MAP,
  GithubReleaseProvider,
} from '../GithubReleaseProvider'
import { Gobot, GobotOptions } from '../Gobot'

export const mkWeaviateBot: PluginFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  const repo = `weaviate/weaviate`
  const platformMap = cloneDeep(DEFAULT_PLATFORM_MAP)
  platformMap.darwin.architectures.arm64.aliases.push(`all`)
  platformMap.darwin.architectures.x64.aliases.push(`all`)
  return new Gobot(
    repo,
    (cacheRoot) =>
      new GithubReleaseProvider(repo, cacheRoot, {
        platformMap,
      }),
    optionsIn,
  )
}
