import { pocketbase } from 'gobot-pocketbase'
import { pocketbase as pbmain } from 'main'

async function main() {
  console.log(`suba pb version`)
  const subap = await pocketbase().run([`--version`])
  await new Promise((resolve) => {
    subap.on('exit', resolve)
  })

  console.log(`main version`)
  const mainp = await pbmain().run([`--version`])
  await new Promise((resolve) => {
    mainp.on('exit', resolve)
  })
}
main()
