const getGcdNumber = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcdNumber(number2, number1 % number2);
};

export default getGcdNumber;
