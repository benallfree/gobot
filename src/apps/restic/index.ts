import type { AppInfo } from '../'

export const restic: AppInfo = {
  name: `Restic`,
  description: `Fast, secure, efficient backup program.`,
  homepage: `https://restic.net/`,
  isAlpha: true,
  factory: 'restic/restic',
}
