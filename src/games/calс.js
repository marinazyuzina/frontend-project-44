import runGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateValue = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Error!');
  }
};

const minNumber = 1;
const maxNumber = 20;

const generateRound = () => {
  const randomNum1 = getRandomNum(minNumber, maxNumber);
  const randomNum2 = getRandomNum(minNumber, maxNumber);
  const randomOperator = operators[getRandomNum(0, operators.length)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const correctAnswer = `${calculateValue(randomNum1, randomOperator, randomNum2)}`;
  return [question, correctAnswer];
};

const startCalcGame = () => {
  runGame(ruleOfGame, generateRound);
};
export default startCalcGame;
