import { AppInfo } from '../'
import { mkConstellation } from './overrides'

export const constellation: AppInfo = {
  name: 'Constellation',
  description: `Constellation is the first Confidential Kubernetes. Constellation shields entire Kubernetes clusters from the (cloud) infrastructure using confidential computing.`,
  homepage: `https://github.com/edgelesssys/constellation`,
  isAlpha: true,
  factory: mkConstellation,
}
