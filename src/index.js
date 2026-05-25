import readlineSync from 'readline-sync'

const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)
  const playedGamesMaxCount = 3

  for (let i = 0; i < playedGamesMaxCount; i += 1) {
    const { question, correctAnswer } = generateRound()
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default playGame
