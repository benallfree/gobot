import { join } from 'path'
import { PluginFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot, GobotOptions } from '../../Gobot'
import { pwd } from '../../util/shell'

class PocketBaseBot extends Gobot {
  filterArgs(args: string[]): string[] {
    if (args.find((arg) => arg.startsWith(`--dir`))) return args
    return [...args, `--dir=${join(pwd(), `pb_data`)}`]
  }
}

export const mkPocketBaseBot: PluginFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  const repo = `pocketbase/pocketbase`
  return new PocketBaseBot(
    repo,
    (cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    optionsIn,
  )
}
