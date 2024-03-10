#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`rclone`, {env: process.env }).run(["--help"])
