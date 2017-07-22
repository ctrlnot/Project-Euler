/*
    Problem 7: 10001st Prime
    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the 10 001st prime number?

    Source: https://projecteuler.net/problem=7
 */

function tenThousandFirstPrime(n) {
  let counter = 0,
      num = 2;
      
  while(counter < n) {
    if(isPrime(num)) {
      counter++;
    }
    if(counter != n) num++;
  }
  
  return num;
}

function isPrime(n) {
  let divisor = 3, 
      limit = Math.sqrt(n);
  
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit) {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }

  return true;
}