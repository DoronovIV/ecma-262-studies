import { SecondSet } from './practice/index.js';

(function run(args) {
  const res = SecondSet.tasks[2]({ a: 1, b: 2 }, 'b');

  console.log(res);
})();
