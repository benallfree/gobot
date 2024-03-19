import { globSync } from 'glob'
import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node18',
  format: 'esm',
  outDir: 'dist',
  entry: [`./src/cli.ts`, './src/api.ts', ...globSync('./src/apps/*/index.ts')],
  ignoreWatch: [
    `./src/apps/*/**/*`,
    `docs`,
    `build`,
    `dist`,
    `plopfile.*`,
    `**/*.md`,
    `plop-templates`,
  ],
})
