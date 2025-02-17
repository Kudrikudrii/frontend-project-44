const getProgressionArr = (startNumber, progressionStep, arrLength) => {
  const progressionArr = [];

  for (let i = 0; i < arrLength; i += 1) {
    progressionArr.push(startNumber + i * progressionStep);
  }
  return progressionArr;
};
export default getProgressionArr;
