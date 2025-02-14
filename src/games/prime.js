import getRandomNumber from "../utils/getRandomNumber.js";
import isPrime from "../utils/isPrime.js";
import baseOfGame from "../index.js";

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 15);
  const question = `${number}`;
  const isNumberPrime = isPrime(number);
  const correctAnswer = isNumberPrime ? "yes" : "no";
  return [question, correctAnswer];
};

const gamePrime = () => {
  const gameRules = `Answer "yes" if given number is prime. Otherwise answer "no".`;
  baseOfGame(gameRules, generateQuestionAndAnswer);
};

export default gamePrime;
