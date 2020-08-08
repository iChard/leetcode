removeDuplicates = function (nums) {
    var dumpCount = 0;// 重复次数计数
    let loop = 1;
    let len = nums.length;
    while (loop < len) {
        if (nums[loop] === nums[loop - 1]) {
            dumpCount++
        } else {
            nums[loop - dumpCount] = nums[loop]
        }
        loop++
    }
    return dumpCount
}

























console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log(removeDuplicates([0,0]))