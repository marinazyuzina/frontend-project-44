import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const randomNum = getRandomNum(2, 50);
  const question = `${randomNum}`;
  const correctAnswer = (isPrime(randomNum)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startPrimeGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startPrimeGame;
