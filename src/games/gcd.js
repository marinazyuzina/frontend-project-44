import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Find the greatest common divisor of given numbers.';
const getNod = (num1, num2) => {
  let a = num1;
  let b = num2;
  let nod;
  if (num1 === num2) {
    nod = num1;
  }
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
    nod = a;
  }
  return nod;
};
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 20;

  const randomNum1 = getRandomNum(minNumber, maxNumber);
  const randomNum2 = getRandomNum(minNumber, maxNumber);

  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = `${getNod(randomNum1, randomNum2)}`;

  return [question, correctAnswer];
};
const startGcdGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startGcdGame;
