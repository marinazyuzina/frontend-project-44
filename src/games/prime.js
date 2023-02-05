import gameLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result;
  if (num === 2) {
    result = 'yes';
  } else if (num % 2 === 0) {
    result = 'no';
  } else {
    result = 'yes';
  }
  return result;
};
const roundGenerator = () => {
  const randomNum = getRandomNum(2, 50);
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum);
  return [question, correctAnswer];
};
const startPrimeGame = () => {
  gameLogic(ruleOfGame, roundGenerator);
};
export default startPrimeGame;
