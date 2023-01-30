import gameLogic from '../index.js';
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
const roundGenerator = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${getNod(num1, num2)}`;
  return [question, correctAnswer];
};
const startGcdGame = () => {
  gameLogic(ruleOfGame, roundGenerator);
};
export default startGcdGame;
