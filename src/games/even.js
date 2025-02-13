import getRandomNumber from "../utils/getRandomNumber.js";
import baseOfGame from "../index.js";

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 10);
  const question = `${number}`;
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? "yes" : "no";

  return [question, correctAnswer];
};

const gameEvenOrOdd = () => {
  const gameRules = `Answer "yes" if the number is even, otherwise answer "no".`;
  baseOfGame(gameRules, generateQuestionAndAnswer);
};

export default gameEvenOrOdd;
