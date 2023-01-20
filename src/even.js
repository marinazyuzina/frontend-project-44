import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const question = 'Question:';

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(1, 100);
    console.log(`${question} ${randomNum}`);
    const answer = readlineSync.question('Your Answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (randomNum % 2 === 0 && answer === 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    } else if (randomNum % 2 !== 0 && answer === 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
startGame();