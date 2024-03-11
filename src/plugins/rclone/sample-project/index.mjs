#!/usr/bin/env node

import { rclone } from 'gobot-rclone'

// Pass command line arguments and run the binary
rclone({ env: process.env }).run(process.argv.slice(2))
