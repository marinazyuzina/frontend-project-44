import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 100;

  const randomNumToShow = getRandomNum(minNumber, maxNumber);

  const question = `${randomNumToShow}`;
  const correctAnswer = isEven(randomNumToShow) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => {
  runGame(ruleOfGame, generateRound);
};

export default startEvenGame;
