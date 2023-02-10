/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

/* Здесь должны быть:
1) Приветствие
2) Генератор рандомного числа
3) Проверялка-крутилка

Для этого здесь будут лежать переменные:
- name
- score
- userAnswer */

import readlineSync from 'readline-sync';
import startEvenGame from './games/game-even.js';
import startCalcGame from './games/game-calc.js';

// global variables
let name = '';
const userAnswer = '';
const score = 0;

export const greeting = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
