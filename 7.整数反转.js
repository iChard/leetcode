/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;
    let absd = Math.abs(x)
    let reversed = absd.toString().split('').reverse().join('')*(isNegative ? -1 : 1)
    if(!(reversed > -Math.pow(2, 31)  && reversed < Math.pow(2, 31) -1)) {
        return 0;
    }
    return reversed
};
// @lc code=end

