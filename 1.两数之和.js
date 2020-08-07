/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let arr = [];
    for (let index in nums) {
        if (nums.includes(target - nums[index])) {
            arr.push(Number(index), nums.indexOf(target - nums[index]));
            return arr;
        }
    }
    return arr;
};
twoSum([2, 7, 11, 15], 9)
// @lc code=end

