import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';
import baseOfGame from '../index.js';

const generateRound = () => {
  const number = getRandomNumber(1, 15);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const runGamePrime = () => {
  const description = `Answer "yes" if given number is prime. Otherwise answer "no".`;
  baseOfGame(description, generateRound);
};

export default runGamePrime;
