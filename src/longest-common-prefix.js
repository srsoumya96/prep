// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 0) return "";
    const min = Math.min(...returnLength(strs));
    for(let i=min; i>0; i--){
        const prefix = strs[0].substring(0, i);
        let miss = false;
        for (let j = 1; j < strs.length && !miss; j++) {
            miss = !strs[j].startsWith(prefix);
        }
        if(!miss) {
            return prefix;
        }
    }
    return "";
};

function returnLength(l) {
    return l.map((cc) => cc.length);
}
