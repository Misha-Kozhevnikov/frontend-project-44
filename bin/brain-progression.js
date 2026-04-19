#!/usr/bin/env node

import playGame from '../src/index.js'
import getProgressionRound from '../src/games/progression.js'

const description = 'What number is missing in the progression?'

playGame(description, getProgressionRound)
