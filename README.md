[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Misha-Kozhevnikov_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Misha-Kozhevnikov_frontend-project-44)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Misha-Kozhevnikov_frontend-project-44)](https://sonarcloud.io/summary/new_code?id=Misha-Kozhevnikov_frontend-project-44)

[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=Misha-Kozhevnikov_frontend-project-44)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Misha-Kozhevnikov/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Misha-Kozhevnikov/frontend-project-44/actions)


## Description 

**Brain Games** is a set of console mini-games built with Node.js.  
Each game asks the player a series of questions, and the goal is to give **3 correct answers in a row**.  
If the player makes a mistake, the game ends and can be started again.

## Minimum requirements

- Node.js v13 or newer.
- A Unix-like environment: Linux, macOS, or Windows with WSL.
- npm for installing dependencies.
- Git for cloning the repository.

## Installation

```bash
git clone <repository-url>
cd <project-directory>
make install
npm link
```

After that, the games will be available as terminal commands.

## How to run

Start any game from the terminal:

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

Each command launches a different game.  
For example, `brain-even` asks whether a number is even, while `brain-calc` asks you to calculate an expression.

## Available games

- `brain-even` — check if a number is even.
- `brain-calc` — solve arithmetic expressions.
- `brain-gcd` — find the greatest common divisor.
- `brain-progression` — guess the missing number in a progression.
- `brain-prime` — determine whether a number is prime.

## Example flow

```text
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
...
Congratulations, Sam!
```

## Notes

After installation, you can also verify the package with:

```bash
make publish
```

And to test the executable commands locally, use:

```bash
npm link
```


## Asciinemas list:

// Asciinema brain-even: https://asciinema.org/a/mErFSMYITrJcj6da //

// Asciinema brain-calc: https://asciinema.org/a/ddtWrwHAw4lHnuEW //

// Asciinema brain-gcd:  https://asciinema.org/a/qY09oLCohKZrpOQp //

// Asciinema brain-progression:   https://asciinema.org/a/Mjcttnfeylfp0t4V //

// Asciinema brain-prime:    https://asciinema.org/a/7EWLRyQjG0excwcH //