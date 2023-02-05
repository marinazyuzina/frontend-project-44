import gameLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
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
