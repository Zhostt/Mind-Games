/* Здесь должны быть:
1) Приветствие
2) Генератор рандомного числа
3) Проверялка-крутилка

Для этого здесь будут лежать переменные:
- name
- score
- userAnswer */

import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
  // The maximum is exclusive and the minimum is inclusive
};

export const getAnswerStr = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const getAnswerNum = () => {
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return userAnswer;
};

export const evaluateAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  return false;
};

export const victoryMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const failMessageLastPart = (userAnswer, correctAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};
