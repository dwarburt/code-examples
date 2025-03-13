export function add(a: number, b: number): number {
  return a + b;
}

console.log("job done.");

// Problem 4:
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true

export function fizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0){
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
}

fizzBuzz(12);

