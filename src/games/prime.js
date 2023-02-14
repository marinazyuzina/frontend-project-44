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
  const minNumber = 2;
  const maxNumber = 50;

  const randomNumToShow = getRandomNum(minNumber, maxNumber);

  const question = `${randomNumToShow}`;
  const correctAnswer = (isPrime(randomNumToShow)) ? 'yes' : 'no';

  return [question, correctAnswer];
};
const startPrimeGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startPrimeGame;
