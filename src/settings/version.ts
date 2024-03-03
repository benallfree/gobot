import { mkSetting } from '../mkSetting'

/**
 * Gets or sets the global semver.
 *
 * @param newValue The version (semver) to set. Default `*`
 */
export const version = mkSetting(`*`)
