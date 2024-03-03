import { mkSetting } from '../mkSetting'

/**
 * Get or set environment variables to pass to PocketBase at launch.
 *
 * @param {NodeJS.ProcessEnv} env The hash of environment variables
 */
export const env = mkSetting<NodeJS.ProcessEnv>({})
