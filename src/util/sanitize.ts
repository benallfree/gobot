import { keys } from '@s-libs/micro-dash'

export const sanitizeOptions = (options: any) => ({
  ...options,
  env: `<${keys(options.env).length} items>`,
})
