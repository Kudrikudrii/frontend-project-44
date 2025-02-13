import readlineSync from "readline-sync";

const baseOfGame = (gameRules, generateQuestionAndAnswer, roundCount = 3) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default baseOfGame;
