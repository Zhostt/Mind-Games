import * as commonFunc from '../index.js';

let name = '';
let userAnswer = '';
let score = 0;
let correctAnswer = 0;
let progString = '';

const taskProg = () => {
  console.log('What number is missing in the progression?');
};

const generateProgression = () => {
  const progFirstItem = commonFunc.getRandomInt(0, 50);
  const progDifference = commonFunc.getRandomInt(1, 10);
  const progLength = commonFunc.getRandomInt(5, 15);
  const progIndexes = progLength - 1;
  const questionIndex = commonFunc.getRandomInt(0, progIndexes);
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

const failProgression = () => {
  questionProgression();
  console.log(`Your answer: ${userAnswer}`);
  commonFunc.failMessageLastPart(userAnswer, correctAnswer, name);
};

const startProgressionGame = () => {
  name = commonFunc.greeting();
  taskProg();
  for (let round = 1; round <= 3; round += 1) {
    generateProgression();
    questionProgression();
    userAnswer = commonFunc.getAnswerNum();
    if (commonFunc.evaluateAnswer(userAnswer, correctAnswer) === false) {
      failProgression();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    commonFunc.victoryMessage(name);
  }
};

export default startProgressionGame;
