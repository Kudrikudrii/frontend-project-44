import getRandomNumber from '../utils/getRandomNumber.js';
import getProgressionArr from '../utils/getProgressionArr.js';
import baseOfGame from '../index.js';

const generateRound = () => {
  const startNumber = getRandomNumber(5, 20);
  const progressionStep = getRandomNumber(2, 4);
  const arrLength = getRandomNumber(5, 10);
  const progression = [...getProgressionArr(startNumber, progressionStep, arrLength)];
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

const runGameProgression = () => {
  const description = 'What number is missing in the progression?';
  baseOfGame(description, generateRound);
};

export default runGameProgression;
