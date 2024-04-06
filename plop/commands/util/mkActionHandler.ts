import { flatten, isFunction, keys, map, uniq } from '@s-libs/micro-dash'
import type { Actions } from 'plop'
import type { Subcommand, Subcommands } from './mkSubcommander'

export const mkActionHandler = (
  subcommandsIn: Subcommands,
  actionType: keyof Omit<Subcommand, 'noPreClean'>,
): Actions => {
  return async (answers) => {
    if (!answers) {
      throw new Error(`Expected answers here`)
    }
    const allSubcommandNames = keys(subcommandsIn)
    const { subcommandNames } = answers as { subcommandNames: string[] }
    const selectedSubcommandNames = uniq([
      ...subcommandNames.filter((subcommand) => subcommand !== 'all'),
      ...(subcommandNames.includes('all') ? allSubcommandNames : []),
    ])
    const results = await Promise.all(
      map(selectedSubcommandNames, (subcommandName) => {
        if (!(subcommandName in subcommandsIn)) {
          throw new Error(
            `${subcommandName} is not one of ${keys(subcommandsIn).join(`,`)}`,
          )
        }

        const subcommand = subcommandsIn[subcommandName]!

        const actionsArrayOrActionsFunc = subcommand[actionType]
        const actionPromise = (() => {
          if (isFunction(actionsArrayOrActionsFunc)) {
            return Promise.resolve(actionsArrayOrActionsFunc(answers))
          }
          return Promise.resolve(actionsArrayOrActionsFunc)
        })()
        return actionPromise.then((actions) => {
          if (actionType === 'gen' && !subcommand.noPreClean) {
            const cleanupAction = subcommand.clean
            if (isFunction(cleanupAction)) {
              return Promise.resolve(cleanupAction(answers)).then(
                (cleanupActions) => {
                  return [...cleanupActions, ...actions]
                },
              )
            }
            return [...cleanupAction, ...actions]
          }
          return actions
        })
      }),
    )

    const final = flatten(results)
    return final
  }
}
