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
  const randomNum = getRandomNum(1, 30);
  const skippedCount = getRandomNum(1, 5);
  const lengthOfProg = getRandomNum(10, 20);

  const progressionArr = getProgression(randomNum, skippedCount, lengthOfProg);
  const randomIndex = getRandomNum(0, progressionArr.length);
  const savedNum = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  const question = progressionArr.join(' ');
  const correctAnswer = String(savedNum);
  return [question, correctAnswer];
};
const startProgressionGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startProgressionGame;
