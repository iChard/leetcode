//  arr1 > arr2
function intersectionArr(arr1, arr2) {
    let arr = []
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            arr.push(arr1[i])
        }
    }
    console.log(arr);
    return arr
}

var nums1 = [4,9,5], nums2 = [9,4,9,8,4]
intersectionArr(nums2, nums1)