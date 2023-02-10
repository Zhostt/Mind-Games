/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';
// import { greeting, answerGetEvaluate } from '../index.js';
// global variables
let name = '';
let userAnswer = '';
let score = 0;

// specific variables for prime
let correctAnswer = '';
let number = 0;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const taskPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

// общая
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
};

const createEvaluateNumber = () => {
  number = getRandomInt(1, 3571);
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
};

const questionPrime = () => {
  console.log(`Question: ${number}`);
};

const answerGetEvaluate = () => {
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  // eslint-disable-next-line no-else-return
  else {
    return false;
  }
};

const failPrime = () => {
  console.log(`Your answer: ${userAnswer}`);
  questionPrime();
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}!`);
};

const startPrimeGame = () => {
  greeting();
  taskPrime();
  for (let round = 1; round <= 3; round += 1) {
    createEvaluateNumber();
    questionPrime();
    // answerGetEvaluate();   actually starts in if check below
    if (answerGetEvaluate() === false) {
      failPrime();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startPrimeGame;
