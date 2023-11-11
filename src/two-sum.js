// https://leetcode.com/problems/two-sum/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let found = false;
    let res;
    loop1 :
    for(let i = 0; i < nums.length-1; i++) {
        loop2 :
        for(let j = i+1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target) {
                    res = [i, j];
                    break loop1;
                }
        }
    }

    return res;
};
