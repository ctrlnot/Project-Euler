/*
    Problem 3: Largest prime factor
    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest prime factor of the number 600851475143?

    Source: https://projecteuler.net/problem=3
 */

function findLargestPrimeFactor(n) {
    let factors = [],
        divisor = 2;
      
  while(n > 2) {
    if(n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    }
    divisor++;
  }
  
  return factors;
}