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
let mathSymbol = '';
let correctAnswer = 0;

// общая фия
const greeting = () => {
  console.log('brain-games\nWelcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const taskCalc = () => {
  console.log('What is the result of the expression?');
};

// общая фия
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
};

const generateNumbers = () => {
  number1 = getRandomInt(-20, 20);
  number2 = getRandomInt(-20, 20);
};

const generateMathSign = () => {
  const signNumber = getRandomInt(1, 4);
  if (signNumber === 1) {
    mathSymbol = '+';
  } else if (signNumber === 2) {
    mathSymbol = '-';
  } else if (signNumber === 3) {
    mathSymbol = '*';
  }
};

const generateAnswer = () => {
  if (mathSymbol === '+') {
    correctAnswer = number1 + number2;
  } else if (mathSymbol === '-') {
    correctAnswer = number1 - number2;
  } else if (mathSymbol === '*') {
    correctAnswer = number1 * number2;
  }
};

const questionCalc = () => {
  console.log(`${number1} ${mathSymbol} ${number2}`);
};

// общая фия
const answerGetEvaluate = () => {
  userAnswer = Number(readlineSync.question('Your answer: '));
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

const startCalcGame = () => {
  greeting();
  taskCalc();
  for (let round = 1; round <= 3; round += 1) {
    getRandomInt();
    generateNumbers();
    generateMathSign();
    generateAnswer();
    questionCalc();
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

export default startCalcGame;

startCalcGame();
