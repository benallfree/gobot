import { join } from 'path'
import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot, type GobotOptions } from '../../Gobot'
import { pwd } from '../../util/shell'

class PocketBaseBot extends Gobot {
  filterArgs(args: string[]): string[] {
    if (args.find((arg) => arg.startsWith(`--dir`))) return args
    return [...args, `--dir=${join(pwd(), `pb_data`)}`]
  }
}

export const mkPocketBaseBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  return new PocketBaseBot(
    `pocketbase/pocketbase`,
    (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    optionsIn,
  )
}
