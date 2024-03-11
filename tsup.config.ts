import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node18',
  format: 'esm',
  entry: [`./src/cli.ts`, './src/api.ts'],
  ignoreWatch: [
    `./src/plugins/*/**/*`,
    `docs`,
    `build`,
    `dist`,
    `plopfile.*`,
    `**/*.md`,
    `plop-templates`,
  ],
  dts: {
    resolve: true,
    entry: './src/api.ts',
  },
})
