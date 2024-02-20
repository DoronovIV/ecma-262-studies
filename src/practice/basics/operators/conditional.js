'use strict';

import promptSync from 'prompt-sync';
const prompt = promptSync();

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
  static 5() {
    const steps = 3;
    let i = 0;

    while (i < steps) {
      console.log(`number ${i}!`);
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
}
