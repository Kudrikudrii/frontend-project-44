const getGcdNumber = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcdNumber(num2, num1 % num2);
};

export default getGcdNumber;
