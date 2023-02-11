import * as commonFunc from '../index.js';

let name = '';
let userAnswer = '';
let score = 0;
let number1 = 0;
let number2 = 0;
let mathSymbol = '';
let correctAnswer = 0;

const taskCalc = () => {
  console.log('What is the result of the expression?');
};

const generateNumbers = () => {
  number1 = commonFunc.getRandomInt(-20, 20);
  number2 = commonFunc.getRandomInt(-20, 20);
};

const generateMathSign = () => {
  const signNumber = commonFunc.getRandomInt(1, 4);
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
  console.log(`Question: ${number1} ${mathSymbol} ${number2}`);
};

const failCalc = () => {
  questionCalc();
  console.log(`Your answer: ${userAnswer}`);
  commonFunc.failMessageLastPart(userAnswer, correctAnswer, name);
};

const startCalcGame = () => {
  name = commonFunc.greeting();
  taskCalc();
  for (let round = 1; round <= 3; round += 1) {
    generateNumbers();
    generateMathSign();
    generateAnswer();
    questionCalc();
    userAnswer = commonFunc.getAnswerNum();
    if (commonFunc.evaluateAnswer(userAnswer, correctAnswer) === false) {
      failCalc();
      break;
    } else {
      score += 1;
    }
  }
  if (score === 3) {
    commonFunc.victoryMessage(name);
  }
};

export default startCalcGame;
