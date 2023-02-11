import * as commonFunc from '../index.js';

let name = '';
let userAnswer = '';
let score = 0;
let correctAnswer = '';
let number = 0;

const taskPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const createEvaluateNumber = () => {
  number = commonFunc.getRandomInt(1, 3571);
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

const failPrime = () => {
  questionPrime();
  console.log(`Your answer: ${userAnswer}`);
  commonFunc.failMessageLastPart(userAnswer, correctAnswer, name);
};

const startPrimeGame = () => {
  name = commonFunc.greeting();
  taskPrime();
  for (let round = 1; round <= 3; round += 1) {
    createEvaluateNumber();
    questionPrime();
    userAnswer = commonFunc.getAnswerStr();
    if (commonFunc.evaluateAnswer(userAnswer, correctAnswer) === false) {
      failPrime();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    commonFunc.victoryMessage(name);
  }
};

export default startPrimeGame;
