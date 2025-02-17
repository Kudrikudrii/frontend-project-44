import getRandomNumber from '../utils/getRandomNumber.js';
import getGcdNumber from '../utils/getGcdNumber.js';
import baseOfGame from '../index.js';

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const answer = String(getGcdNumber(num1, num2));
  const question = `${num1} ${num2}`;

  return [question, answer];
};

const runGameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  baseOfGame(description, generateRound);
};

export default runGameGcd;
