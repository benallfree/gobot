#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`mc`, {env: process.env }).run(["--help"])
