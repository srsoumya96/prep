// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split("");
    let arr = [];
    if(s.length %2 !== 0) return false;
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i]);
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if(s[i] === ')' && arr.pop() !== '(') {
                return false;
            }
            if(s[i] === '}' && arr.pop() !== '{') {
                return false;
            }
            if(s[i] === ']' && arr.pop() !== '[') {
                return false;
            }
        }
    }
    if(arr.length) return false;
    return true;
};
