/*
    Problem 10: Summation of Primes
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

    Find the sum of all the primes below two million.

    Source: https://projecteuler.net/problem=10
 */

function summationOfPrimes(limit) {
  let sum = 0;
  
  for(let i = 2; i < limit; i++)
    if(isPrime(i))
      sum += i;
      
  return sum;
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