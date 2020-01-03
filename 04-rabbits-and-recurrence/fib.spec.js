import { fib } from './fib';

describe('fib()', () => {
  test('n is 3, k is 5', () => {
    expect(fib()).toEqual();
  });

  test('n is 0', () => {
    expect(() => {
      fib(0, 5);
    }).toThrow(new Error('n or k must be greater than 0'));
  });

  test('k is 0', () => {
    expect(() => {
      fib(3, 0);
    }).toThrow(new Error('n or k must be greater than 0'));
  });

  test('n is greater than 40', () => {
    expect(() => {
      fib(50, 5);
    }).toThrow(new Error('n ≤ 40 or k ≤ 5'));
  });

  test('k is greater than 5', () => {
    expect(() => {
      fib(3, 50);
    }).toThrow(new Error('n ≤ 40 or k ≤ 5'));
  });
});