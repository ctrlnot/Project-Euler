/*
    Problem 4: Largest palindrome product
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.

    Source: https://projecteuler.net/problem=4
 */

function largestPalindromeProduct(limit) {
    let x, y, largest = 0;

    for(let i = limit - 1; i >= 100; i--) {
        for(let j = limit - 1; j >= i; j--) {
            let prod = i * j;
            if(isPalindrome(prod)) {
                if(prod > largest) {
                    largest = prod;
                    x = i;
                    y = j;
                }
            }
        }
    }

    return "Largest:" + x + " & " + y;
}

function isPalindrome(num) {
    var i,
        str = num.toString(),
        len = str.length;

    for(i = 0; i < len / 2; i++) {
        if(str[i] !== str[len - 1 - i]) return false;
    }

    return true;
}