/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';
// global variables
let name = '';
let userAnswer = '';
let score = 0;

// specific variables for calc
let number1 = 0;
let number2 = 0;
let correctAnswer = 0;

// общая фия
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const taskGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

// общая фия
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
};

const generateNumbers = () => {
  number1 = getRandomInt(-100, 100);
  number2 = getRandomInt(-100, 100);
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

// общая фия, UserAnswer определяется у каждой отдельно
const answerGetEvaluate = () => {
  userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  // eslint-disable-next-line no-else-return
  else {
    return false;
  }
};

const failGCD = () => {
  console.log(`Your answer: ${userAnswer}`);
  questionGCD();
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${name}!`);
};

const startGCDGame = () => {
  greeting();
  taskGCD();
  for (let round = 1; round <= 3; round += 1) {
    generateNumbers();
    getDivisor();
    questionGCD();
    if (answerGetEvaluate() === false) {
      failGCD();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGCDGame;
