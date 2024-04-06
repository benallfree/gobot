export enum Flags {
  ReallyPublish = 'GOBOT_PUBLISH_CONFIRM',
  Verbosity = 'GOBOT_VERBOSITY',
  UseNpm = 'GOBOT_USE_NPM',
  NpmRegistryEndpoint = `npm_config_registry`,
  NpmLocalRoot = `npm_config_prefix`,
  PlopFilter = `__PLOP_FILTER__`,
}
