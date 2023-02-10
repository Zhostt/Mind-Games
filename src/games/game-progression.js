/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import readlineSync from 'readline-sync';
// global variables
let name = '';
let userAnswer = '';
let score = 0;

// specific variables for calc
let correctAnswer = 0;
let progString = '';

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

const generateProgression = () => {
  const progFirstItem = getRandomInt(0, 50);
  const progDifference = getRandomInt(1, 10);
  const progLength = getRandomInt(5, 15);
  const progIndexes = progLength - 1;
  const questionIndex = getRandomInt(0, progIndexes);
  const progression = [progFirstItem];
  for (let index = 1; index <= progLength - 1; index += 1) {
    const previousItem = progression[index - 1];
    progression.push(previousItem + progDifference);
  }
  correctAnswer = progression[questionIndex];
  progression[questionIndex] = '..';
  progString = progression.join(' ');
};

const questionProgression = () => {
  console.log(`Question: ${progString}`);
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

const failProgression = () => {
  console.log(`Your answer: ${userAnswer}`);
  questionProgression();
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
};

const startProgressionGame = () => {
  greeting();
  taskCalc();
  for (let round = 1; round <= 3; round += 1) {
    getRandomInt();
    generateProgression();
    questionProgression();
    if (answerGetEvaluate() === false) {
      failProgression();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startProgressionGame;
