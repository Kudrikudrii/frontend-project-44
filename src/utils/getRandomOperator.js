const getRandomOperator = () => {
  const arrayOperators = ["+", "-", "*"];
  const operatorIndex = Math.floor(Math.random() * arrayOperators.length);
  const operator = arrayOperators[operatorIndex];
  return operator;
};

export default getRandomOperator;
