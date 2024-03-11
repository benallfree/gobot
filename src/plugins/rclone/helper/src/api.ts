import { gobot, GobotOptions, mergeConfig } from 'gobot'
import { meta } from './meta'

const { name, version } = meta
export const rclone = (optionsIn?: Partial<GobotOptions>) =>
  gobot(name, mergeConfig<Partial<GobotOptions>>({ version }, optionsIn || {}))
