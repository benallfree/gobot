import { gobot } from 'gobot'

async function main() {
  console.log(`suba pb version`)
  const subap = await gobot(`pocketbase`).run([`--version`])
  await new Promise((resolve) => {
    subap.on('exit', resolve)
  })
}
main()
