#!/usr/bin/env node

import { pulumi } from 'gobot-pulumi'

// Pass command line arguments and run the binary
pulumi({ env: process.env }).run(process.argv.slice(2))
