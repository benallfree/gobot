import { AppInfo } from '../'

export const prometheus: AppInfo = {
  name: 'Prometheus',
  description: `The Prometheus monitoring system and time series database.`,
  homepage: `https://prometheus.io/`,
  isAlpha: true,
  factory: `prometheus/prometheus`,
}
