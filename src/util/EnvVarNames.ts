import { platform } from 'process'

export const EnvVarNames = {
  // https://github.com/nodejs/node/issues/20605#issuecomment-387489708
  Path: platform === 'win32' ? 'Path' : 'PATH',
  ReallyPublish: 'GOBOT_PUBLISH_CONFIRM',
  Verbosity: 'GOBOT_VERBOSITY',
  UseNpm: 'GOBOT_USE_NPM',
  NpmRegistryEndpoint: `npm_config_registry`,
  NpmLocalRoot: `npm_config_prefix`,
  PlopFilter: `__PLOP_FILTER__`,
} as const
