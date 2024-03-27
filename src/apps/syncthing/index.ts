import type { AppInfo } from '../'

export const syncthing: AppInfo = {
  name: 'syncthing',
  description: 'Open Source Continuous File Synchronization',
  homepage: 'https://forum.syncthing.net/',
  isAlpha: true,
  factory: 'syncthing/syncthing',
}
