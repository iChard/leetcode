/**
 * @param {*} nums 
 * @param {*} target 
 */
function twoSum(nums, target) {
    let len = nums.length;
    let res = []
    for (let i = 0; i < len - 1; i++) {
        let a = nums[i]
        for (let j = i + 1; j < len; j++) {
            let b = nums[j]
            if (a + b === target) {
                console.log([i, j]);
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
let arr = [1, 0, 1, 1]
let target = 2;
twoSum(arr, target)
// console.log(twoSum(arr, target));