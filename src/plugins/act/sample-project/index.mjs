#!/usr/bin/env node

import { act } from 'gobot-act'

// Pass command line arguments and run the binary
act({ env: process.env }).run(process.argv.slice(2))
