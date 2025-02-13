import getRandomNumber from "../utils/getRandomNumber.js";
import getRandomOperator from "../utils/getRandomOperator.js";
import calculateExpression from "../utils/calculateExpression.js";
import baseOfGame from "../index.js";

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const correctAnswer = String(calculateExpression(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;

  return [question, correctAnswer];
};

const gameCalc = () => {
  const gameRules = `What is the result of the expression?`;
  baseOfGame(gameRules, generateQuestionAndAnswer);
};

export default gameCalc;
