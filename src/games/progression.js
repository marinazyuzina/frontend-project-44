import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'What number is missing in the progression?';
const getProgression = (randomNum, skippedCount, lengthOfProg) => {
  const progression = [randomNum];
  for (let i = 0; progression.length <= lengthOfProg; i += 1) {
    progression.push(progression[i] + skippedCount);
  }
  return progression;
};

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 30;
  const maxSkippedNumber = 5;
  const minLengthOfProg = 10;
  const maxLengthOfProg = 20;

  const randomNum = getRandomNum(minNumber, maxNumber);
  const skippedCount = getRandomNum(minNumber, maxSkippedNumber);
  const lengthOfProg = getRandomNum(minLengthOfProg, maxLengthOfProg);

  const progressionArr = getProgression(randomNum, skippedCount, lengthOfProg);
  const randomIndex = getRandomNum(0, progressionArr.length);
  const correctAnswer = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';

  const question = progressionArr.join(' ');

  return [question, String(correctAnswer)];
};
const startProgressionGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startProgressionGame;
