import { GobotBase, GobotOptions } from '../../../GobotBase'

export class PocketBase extends GobotBase {
  constructor(options: Partial<GobotOptions> = {}) {
    super(`pocketbase/pocketbase`, options)
  }
}
