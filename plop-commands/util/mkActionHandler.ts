import { flatten, isFunction, keys, map, uniq } from '@s-libs/micro-dash'
import type { Actions } from 'plop'
import type { Subcommand, Subcommands } from './mkSubcommander'

export const mkActionHandler = (
  subcommandsIn: Subcommands,
  actionType: keyof Subcommand,
): Actions => {
  return async (answers) => {
    if (!answers) {
      throw new Error(`Expected answers here`)
    }
    const allSubcommands = keys(subcommandsIn)
    const { subcommands } = answers as { subcommands: string[] }
    const selectedSubcommands = uniq([
      ...subcommands.filter((subcommand) => subcommand !== 'all'),
      ...(subcommands.includes('all') ? allSubcommands : []),
    ])
    const results = await Promise.all(
      map(selectedSubcommands, (subcommand) => {
        if (!(subcommand in subcommandsIn)) {
          throw new Error(
            `${subcommand} is not one of ${keys(subcommandsIn).join(`,`)}`,
          )
        }
        const action = subcommandsIn[subcommand]![actionType]
        if (isFunction(action)) {
          return action(answers)
        }
        return action
      }),
    )
    return flatten(results)
  }
}
