import getRandomNumber from '../utils/getRandomNumber.js';
import baseOfGame from '../index.js';

const calculateExpression = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calculateExpression(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;

  return [question, answer];
};

const runGameCalc = () => {
  const description = 'What is the result of the expression?';
  baseOfGame(description, generateRound);
};

export default runGameCalc;
