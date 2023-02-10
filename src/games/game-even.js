/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';
// import { greeting, answerGetEvaluate } from '../index.js';

let number = 0;
let correctAnswer = '';
let userAnswer = '';
let score = 0;
let name = '';

export const greeting = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const taskEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const createNumberSetEvenity = () => {
  number = getRandomInt(1, 100);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
};

const questionEven = () => {
  console.log(`Question: ${number}`);
};

export const answerGetEvaluate = () => {
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  // eslint-disable-next-line no-else-return
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${name}!`);
    return false;
  }
};

const startEvenGame = () => {
  greeting();
  taskEven();
  for (let round = 1; round <= 3; round += 1) {
    getRandomInt();
    createNumberSetEvenity();
    questionEven();
    // answerGetEvaluate();   actually starts in if check below
    if (answerGetEvaluate() === false) {
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startEvenGame;