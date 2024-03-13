import { forEach, keys } from '@s-libs/micro-dash'
import { Actions, NodePlopAPI } from 'plop'
import { addCleanCommand } from '../cleanCommand'
import { mkActionHandler } from './mkActionHandler'

export type Subcommand = { gen: Actions; clean: Actions }
export type Subcommands = {
  [_: string]: Subcommand
}

export const mkSubcommander = (
  generatorName: string,
  generatorDescription: string,
  promptMessage: string,
  subcommandsIn: Subcommands,
  commandType: keyof Subcommand,
  plop: NodePlopAPI,
) => {
  forEach(subcommandsIn, (info, command) => {
    addCleanCommand(command, info.clean)
  })

  plop.setGenerator(generatorName, {
    description: generatorDescription,
    prompts: [
      {
        message: promptMessage,
        name: 'subcommands',
        type: 'checkbox',
        choices: keys(subcommandsIn),
        default: keys(subcommandsIn),
      },
    ],
    actions: mkActionHandler(subcommandsIn, commandType),
  })
}
