/*
    Problem 2: Even Fibonacci numbers
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

    Source: https://projecteuler.net/problem=2
 */

function evenFibonacciNumbers(limit) {
  let sum = 0,
      a = 0,
      b = 1,
      temp;
  
  while(b < limit) {
    temp = a;
    a = b;
    b += temp;
    
    if((b & 1) === 0) sum += b;
  }
  
  return sum;
}