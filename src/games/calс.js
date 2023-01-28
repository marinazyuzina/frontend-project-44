import gameLogic from '../index.js';
import getRandomNum from '../getRandomNum.js';

const ruleOfGame = 'What is the result of the expression?';
const roundGenerator = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const answerOfQuestion = () => {
    switch (randomOperator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return null;
    }
  };
  const correctAnswer = `${answerOfQuestion(num1, randomOperator, num2)}`;
  return [question, correctAnswer];
};

const startCalcGame = () => {
  gameLogic(ruleOfGame, roundGenerator);
};
export default startCalcGame;
