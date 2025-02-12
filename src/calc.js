import readlineSync from "readline-sync";
import getRandomNumber from "./getRandomNumber.js";
import getRandomOperator from "./getRandomOperator.js";
import calculateExpression from "./calculateExpression.js";

const gameCalc = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(`What is the result of the expression?`);
  let correctAnswerCount = 0;
  const neededCorrectAnswer = 3;

  while (correctAnswerCount < neededCorrectAnswer) {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const userAnswer = readlineSync.question(
      `Question: ${num1} ${operator} ${num2}\nYour answer: `
    );
    const correctAnswer = calculateExpression(num1, num2, operator);

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameCalc;
