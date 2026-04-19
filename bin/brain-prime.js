#!/usr/bin/env node

import playGame from '../src/index.js'
import getPrimeRound from '../src/games/prime.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

playGame(description, getPrimeRound)
