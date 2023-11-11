// https://leetcode.com/problems/add-strings/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let max = Math.max(num1.length, num2.length);
    num1 = num1.padStart(max, '0');
    num2 = num2.padStart(max, '0');
    let c = 0;
    let res = '';
    for(let i=num1.length-1; i>=0; i--) {
        let curr = parseInt(num1[i], 10) + parseInt(num2[i], 10) + c;
        if(i === 0) {
            res = curr + res;
        } else {
            c = Math.floor(curr / 10);
            res = curr % 10 + res;
        }
    }
    return res;
};
