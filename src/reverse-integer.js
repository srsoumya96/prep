// https://leetcode.com/problems/reverse-integer


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = "";
    let factor = 1;
    if(x < 0) {
        factor = -1;
        x = Math.abs(x);
    }
    if(x === 0 ) {
        return 0;
    }
    while(x > 0) {
        rev += x%10;
        x = Math.floor(x/10);
    }
    return between(parseInt(rev)) ? factor * parseInt(rev) : 0;
};

function between(x) {
  return x >= (Math.pow(2, 31) * -1) && x <= (Math.pow(2, 31) -1);
}
