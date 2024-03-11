#!/usr/bin/env node

import { pocketbase } from 'gobot-pocketbase'

// Pass command line arguments and run the binary
pocketbase({ env: process.env }).run(process.argv.slice(2))
