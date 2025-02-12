import readlineSync from "readline-sync";
import getRandomNumber from "./getRandomNumber.js";

const gameEvenOrOdd = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 10);
    const isEven = number % 2 === 0;
    const userAnswer = readlineSync.question(
      `Question: ${number}\nYour answer: `
    );

    if (isEven && userAnswer === "yes") {
      console.log("Correct!");
    } else if (!isEven && userAnswer === "no") {
      console.log("Correct!");
    } else {
      if (userAnswer === "yes") {
        console.log(
          `'yes' is wrong answer ;( Correct answer was 'no'. Let's try again, ${name}!`
        );
      } else if (userAnswer === "no") {
        console.log(
          `'no' is wrong answer ;( Correct answer was 'yes'. Let's try again, ${name}!`
        );
      } else {
        console.log(`Invalid input! Please answer with 'yes' or 'no'.`);
      }
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEvenOrOdd;
