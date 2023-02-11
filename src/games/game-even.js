import * as commonFunc from '../index.js';

let name = '';
let number = 0;
let correctAnswer = '';
let score = 0;
let userAnswer = '';

const taskEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const createNumberSetEvenity = () => {
  number = commonFunc.getRandomInt(1, 100);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
};

const questionEven = () => {
  console.log(`Question: ${number}`);
};

const startEvenGame = () => {
  name = commonFunc.greeting();
  taskEven();
  for (let round = 1; round <= 3; round += 1) {
    createNumberSetEvenity();
    questionEven();
    userAnswer = commonFunc.getAnswerStr();
    if (commonFunc.evaluateAnswer(userAnswer, correctAnswer) === false) {
      commonFunc.failMessageLastPart(userAnswer, correctAnswer, name);
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    commonFunc.victoryMessage(name);
  }
};

export default startEvenGame;
