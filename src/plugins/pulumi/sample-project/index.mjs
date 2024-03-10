#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`pulumi`, {env: process.env }).run(["--help"])
