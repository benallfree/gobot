import { flatten, isFunction, keys, map } from '@s-libs/micro-dash'
import { Subcommand, Subcommands } from './mkSubcommander'

export const mkActionHandler = (
  subcommandsIn: Subcommands,
  actionType: keyof Subcommand,
) => {
  return async (answers: any) => {
    if (!answers) {
      throw new Error(`Expected answers here`)
    }
    const { subcommands } = answers
    const results = await Promise.all(
      map(subcommands, (subcommand) => {
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
