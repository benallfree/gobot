#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`act`, {env: process.env }).run(["--help"])
