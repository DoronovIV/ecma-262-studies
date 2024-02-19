'use strict';

import promptSync from 'prompt-sync';
const prompt = promptSync();

export class FirstSet {
  /** expected result: [2, 1] */
  static 1() {
    let a = 1;
    let b = 1;

    let c = ++a; // 2
    let d = b++; // 1

    return [c, d];
  }

  /** expected result: [4, 5] */
  static 2() {
    let a = 2; // 2 -> 4

    let x = 1 + (a *= 2); // 5

    return [a, x];
  }

  /**
   * initially expected result: [10,10,1,2,5,'45px','$45',2,NaN,' -9 5',NaN,1,NaN,NaN]
   * actual result:             ['10',-1,1,2,5,'9px','$45',2,NaN,' -9 5',NaN,1,NaN,NaN]
   *  */

  static 3() {
    //     initial thoughts:        errors:
    return [
      '' + 1 + 0, //     10         // '10'
      '' - 1 + 0, //     10         // -1
      true + false, //   1
      6 / '3', //        2
      '2' * '3', //      6
      4 + 5 + 'px', //   '45px'     // '9px'
      '$' + 4 + 5, //    '$45'
      '4' - 2, //         2
      '4px' - 2, //       NaN
      '  -9  ' + 5, //    ' -9 5'
      '  -9  ' - 5, //    NaN
      null + 1, //        1
      undefined + 1, //   NaN
      ' \t \n' - 2, //    NaN
    ];
  }

  /** expected result: 3 */
  static 4() {
    let resultArray = [];

    const A = prompt('first value: ');
    const B = prompt('second value: ');

    resultArray = [A, B].map((val) => {
      return Number(val);
    });

    console.log('\nstring result:', A + B);

    return resultArray.reduce((sum, val) => {
      return sum + val;
    }, 0);
  }
}
