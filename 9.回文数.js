/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === -1) return false;
    if (x < 0) {
        return false;
    }
    let strx = x + '';
    console.log(!(strx.length % 2));
    if (!(strx.length % 2)) {
        strx.split('').splice()
    }
    let arred = strx.split('');
    console.log(arred);
    let len = arred.length;
    let mid = arred[(len - 1) / 2];
    console.log(mid, x, (len - 1) / 2);
    arred = strx.split(mid)
    console.log(arred);
    return arred[0] === arred[1].split('').reverse().join('')
};
// @lc code=end

