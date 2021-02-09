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
    let len = nums.length;
    let loop = len - 1;
    let item;
    if (len == 2) {
        return [0, 1]
    }
    while (loop > 1) {
        item = nums.pop();
        dis = target - item;
        if (nums.indexOf(dis) !== -1) {
            return [nums.indexOf(dis), loop]
        }
        loop--;
    }
    return [0, 1];
};

function twoSum(nums, target) {
    let len = nums.length;
    let res = []
    for (let i = 0; i < len - 1; i++) {
        let a = nums[i]
        for (let j = i + 1; j < len; j++) {
            let b = nums[j]
            if (a + b === target) {
                res = [i, j];
                break;
            }
            continue;
        }
        if(res.length) {
            return res;
        }
    }
}
// twoSum([2, 7, 11, 15], 9)
console.log(twoSum([2, 7, 11, 15], 9))
// @lc code=end


