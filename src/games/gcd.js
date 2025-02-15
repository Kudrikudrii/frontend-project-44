import getRandomNumber from '../utils/getRandomNumber.js';
import getGcdNumber from '../utils/getGcdNumber.js';
import baseOfGame from '../index.js';

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const correctAnswer = String(getGcdNumber(num1, num2));
  const question = `${num1} ${num2}`;

  return [question, correctAnswer];
};

const gameGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  baseOfGame(gameRules, generateQuestionAndAnswer);
};

export default gameGcd;
