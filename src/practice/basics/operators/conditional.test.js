import { ConditionalSet } from './conditional.js';

describe('task 6 ternary expression', () => {
  let fn = null;

  beforeEach(() => {
    fn = ConditionalSet[1];
  });

  it("should return 'Привет'", () => {
    expect(fn('Сотрудник')).toEqual('Привет');
  });

  it("should return 'Здравствуйте'", () => {
    expect(fn('Директор')).toEqual('Здравствуйте');
  });

  it("should return 'Нет логина'", () => {
    expect(fn('pizza')).toEqual('Нет логина');
  });

  it("should return ''", () => {
    expect(fn('')).toEqual('');
  });
});

describe('task 10 loop replacement', () => {
  let fn = null;
  let runForLoop = null;

  beforeEach(() => {
    fn = ConditionalSet[5];
    runForLoop = (steps) => {
      let i = steps;

      for (let i = 0; i < steps; i++) {}

      return i;
    };
  });

  it('should return 3', () => {
    const steps = 3;

    const forLoopResult = runForLoop(steps);
    const whileLoopResult = fn();

    expect(forLoopResult).toEqual(whileLoopResult);
  });
});
