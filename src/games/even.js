import getRandomNumber from '../utils/getRandomNumber.js';
import baseOfGame from '../index.js';

const generateRound = () => {
  const number = getRandomNumber(1, 10);
  const question = String(number);
  const isEven = number % 2 === 0;
  const answer = isEven ? 'yes' : 'no';

  return [question, answer];
};

const runGameEvenOrOdd = () => {
  const description = `Answer "yes" if the number is even, otherwise answer "no".`;
  baseOfGame(description, generateRound);
};

export default runGameEvenOrOdd;
