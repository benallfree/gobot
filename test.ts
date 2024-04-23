import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { gobot } from './dist/api'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function main() {
  const bot = await gobot(`pocketbase`, { version: `~0.22.7` })
  await bot.run([`-v`])
  await bot.run([`serve`, `--dir=${join(__dirname, 'pb_data')}`])
}

main()
