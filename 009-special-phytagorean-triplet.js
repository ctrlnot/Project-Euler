/*
    Problem 9: Special Phytagorean Triplet
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

    a^2 + b^2 = c^2
    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.

    Source: https://projecteuler.net/problem=9
 */

function specialPhytagoreanTriplet(sum) {
  let a, b;
  
  for(a = 1; a < Math.floor(sum / 3); a++) {
    for(b = a + 1; b < Math.floor(sum / 2); b++) {
      let c = sum - a - b;
      if(c * c === a * a + b * b)
        return a * b * c;
    }
  }
}