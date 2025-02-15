import getRandomNumber from './/getRandomNumber.js';

const getProgressionArr = () => {
  const startNumber = getRandomNumber(5, 20);
  const progressionStep = getRandomNumber(2, 4);
  const arrLength = getRandomNumber(5, 10);
  const progressionArr = [];

  for (let i = 0; i < arrLength; i += 1) {
    progressionArr.push(startNumber + i * progressionStep);
  }
  return progressionArr;
};
export default getProgressionArr;
