// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x % 10 === x) return true;

    let res = x.toString().split("");
    return [...res].reverse().every((val, index) => val === res[index]);
};
