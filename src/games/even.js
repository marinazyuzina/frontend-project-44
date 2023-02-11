import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  const randomNum = getRandomNum(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => {
  runGame(ruleOfGame, generateRound);
};

export default startEvenGame;
