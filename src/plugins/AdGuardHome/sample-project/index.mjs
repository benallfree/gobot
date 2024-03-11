#!/usr/bin/env node

import { AdGuardHome } from 'gobot-AdGuardHome'

// Pass command line arguments and run the binary
AdGuardHome({ env: process.env }).run(process.argv.slice(2))
