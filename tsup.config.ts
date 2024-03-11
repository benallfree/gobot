import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node18',
  format: 'esm',
  outDir: 'dist',
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
})
