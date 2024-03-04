'use strict';

import promptSync from 'prompt-sync';
const prompt = promptSync();

/** 10 tasks in total
 * from 6th to 15th
 */
export class ConditionalSet {
  /** 6th ordinal */
  static 1(login) {
    const isEmployee = login === 'Сотрудник' || login === 'Директор';

    return login
      ? isEmployee
        ? login === 'Директор'
          ? 'Здравствуйте'
          : 'Привет'
        : 'Нет логина'
      : '';
  }

  /** 7th ordinal */
  static 2() {
    if (-1 || 0) console.log('first'); //            // true  // [..., -1: true, 0: false, 1: true, ...]
    if (-1 && 0) console.log('second'); //           // false // same, but logical multiplication resolves in false
    if (null || (-1 && 1)) console.log('third'); //  // true  // -1 ^ 1 resolves in true, true v false - in true
  }

  /** 8th ordinal */
  static 3() {
    let i = 3;

    while (i) {
      i--;
    }

    return i; // 0 // the condition reads '0' and breaks the loop
  }

  /** 9th ordinal */
  static 4() {
    let i, j;

    // Постфиксная форма:
    for (i = 0; i < 5; i++) {}

    // Префиксная форма:
    for (j = 0; j < 5; ++j) {}

    return [i, j]; // [0, 0] since there will be no difference
    // although I've heard that in C++ there actually was difference
    // at some point, specifically prefix form worked q&q "faster".
  }

  /** 10th ordinal */
  static 5(inputSteps) {
    let steps = 0;

    if (inputSteps) {
      steps = inputSteps;
    }

    let i = 0;

    while (i < steps) {
      i++;
    }

    return i;
  }

  /** 11th ordinal */
  static 6() {
    let promptResult;
    let condition = false;

    do {
      promptResult = Number(prompt('Enter a number greater than 100: '));
      condition = isNaN(promptResult) || promptResult <= 100;
    } while (condition);

    return promptResult;
  }

  /** 12th ordinal */
  static 7(inputLimit) {
    let limit;
    const primeNumbers = [];

    if (inputLimit === undefined) {
      limit = prompt('Enter a limit number: ');
    } else {
      limit = inputLimit;
    }

    if (limit < 1) {
      return [];
    }

    outerLoop: for (let i = 2; i <= limit; i++) {
      for (let j = 0; j < i; j++) {
        if (i % j === 0) {
          continue outerLoop;
        }

        if (!primeNumbers.find((el) => el === i)) {
          primeNumbers.push(i);
        }
      }
    }

    return primeNumbers;
  }

  /** 13th ordinal */
  static 8(input) {
    if (input === null || input === undefined) {
      return null;
    }

    switch (input) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
      case 3:
        return '2 или 3';
    }
  }

  /** 14th ordinal */
  static 9(inputA, inputB) {
    if ([inputA, inputB].some((v) => v === null || v === undefined)) {
      return null;
    }

    if (inputA < inputB || isNaN(inputA)) {
      return inputA;
    }

    return inputB;
  }

  /** 15th ordinal */
  static 10(question) {
    const yes = () => {
      return 'Вы согласились.';
    };
    const no = () => {
      return 'Вы отменили выполнение.';
    };

    const confirm = () => {
      return question.length > 10;
    };

    /** FE restructured into AF */
    const ask = () => {
      if (confirm(question)) return yes();
      else return no();
    };

    return ask();
  }
}
