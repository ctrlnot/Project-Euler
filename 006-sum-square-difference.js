/*
    Problem 6: Sum Square Difference
    The sum of the squares of the first ten natural numbers is,

    1^2 + 2^2 + ... + 10^2 = 385
    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)^2 = 552 = 3025
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

    Source: https://projecteuler.net/problem=6
 */

function sumSquareDiff(n) {
  let sumOfSq = 0,
      temp = 0,
      sqOfSum = 0;

  for(let i = 1; i <= n; i++) {
    sumOfSq += i * i;
    temp += i;
    sqOfSum = temp * temp;
  }
  
  return sqOfSum - sumOfSq;
}