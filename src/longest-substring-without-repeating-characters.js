// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 1;
    let subs = "";
    if(s.length === 0) {
        return 0;
    }
    for(let i=0; i<s.length-1; i++) {
        subs = s.charAt(i);
        let cc = 1;
        for(let j=i+1; j<s.length; j++) {
            if(subs.indexOf(s.charAt(j)) === -1) {
                subs += s.charAt(j);
                cc++;
            } else {
                break;
            }
        }
        count = cc > count ? cc : count;
    }
    return count;
};
