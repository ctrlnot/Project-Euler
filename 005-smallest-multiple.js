/*
    Problem 5: Smallest Multiple
    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

    Source: https://projecteuler.net/problem=5
 */

function smallestMultiple(n) {
  let num = n * n,
      solved = false;
      
  while(!solved) {
    let valid = true;
    
    for(let i = 1; i <= n; i++) {
      if(num % i !== 0) {
        valid = false;
        break;
      }
    }
    
    if(!valid)
      num += 2;
    else
      solved = true;
  }
  
  return num;
}