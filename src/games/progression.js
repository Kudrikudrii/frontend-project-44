import getRandomNumber from '../utils/getRandomNumber.js';
import getProgressionArr from '../utils/getProgressionArr.js';
import baseOfGame from '../index.js';

const generateQuestionAndAnswer = () => {
  const progression = [...getProgressionArr()];
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const gameProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  baseOfGame(gameRules, generateQuestionAndAnswer);
};

export default gameProgression;
