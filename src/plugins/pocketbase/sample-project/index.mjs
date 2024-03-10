#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`pocketbase`, {env: process.env }).run(["serve"])
