import * as commonFunc from '../index.js';

let name = '';
let userAnswer = '';
let score = 0;
let number1 = 0;
let number2 = 0;
let correctAnswer = 0;

const taskGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const generateNumbers = () => {
  number1 = commonFunc.getRandomInt(-100, 100);
  number2 = commonFunc.getRandomInt(-100, 100);
};

const getDivisor = () => {
  const divisorArray = [];
  // while divisor <= maximum of 2 numbers, modular (abs)
  for (let divisor = 0; divisor <= Math.max(Math.abs(number1), Math.abs(number2)); divisor += 1) {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      divisorArray.push(divisor);
    }
  }
  // console.log('Thats to know answer without thinking, last one: ', divisorArray);
  const maxDivisor = Math.max.apply(null, divisorArray);
  correctAnswer = maxDivisor;
};

const questionGCD = () => {
  console.log(`Question: ${number1} ${number2}`);
};

const failGCD = () => {
  questionGCD();
  console.log(`Your answer: ${userAnswer}`);
  commonFunc.failMessageLastPart(userAnswer, correctAnswer, name);
};

const startGCDGame = () => {
  name = commonFunc.greeting();
  taskGCD();
  for (let round = 1; round <= 3; round += 1) {
    generateNumbers();
    getDivisor();
    questionGCD();
    userAnswer = commonFunc.getAnswerNum();
    if (commonFunc.evaluateAnswer(userAnswer, correctAnswer) === false) {
      failGCD();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    commonFunc.victoryMessage(name);
  }
};

export default startGCDGame;
