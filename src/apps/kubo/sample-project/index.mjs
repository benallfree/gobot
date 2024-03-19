#!/usr/bin/env node

import { gobot } from 'gobot'

// Pass command line arguments and run the binary
const bot = await gobot(`kubo`, { env: process.env })
bot.run(process.argv.slice(2))
