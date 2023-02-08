/* eslint-disable linebreak-style */
/* eslint-disable max-len */
// functions for game "even or odd", imported in brain-even.js;

import readlineSync from 'readline-sync';

let name = '';
let number = 0;
let evenity = 'no';
let userAnswer = '';
let score = 0;

export const greeting = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

export const createNumberSetEvenity = () => {
  number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    evenity = 'yes';
  } else {
    evenity = 'no';
  }
};

export const answerGetEvaluate = () => {
  userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === evenity) {
    console.log('Correct!');
    return true;
  }
  // eslint-disable-next-line no-else-return
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${evenity}'.
    Let's try again, ${name}!`);
    return false;
  }
};

const startEvenGame = () => {
  greeting();
  for (let round = 1; round <= 3; round += 1) {
    getRandomInt();
    createNumberSetEvenity();
    // answerGetEvaluate();
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
