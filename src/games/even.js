import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import greeting from '../cli.js?';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const userName = greeting();

const startGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const question = 'Question:';
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(1, 100);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    console.log(`${question} ${randomNum}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
