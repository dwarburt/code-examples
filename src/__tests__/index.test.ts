import { add } from '../index';
import { fizzBuzz } from '../index';

describe('add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(1, 1)).toBe(2);
  });
});

describe('check FizzBuzz', () => {
  test('Should print Fizz for 12', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
  });
});