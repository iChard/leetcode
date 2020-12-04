function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivot = arr[0]
    let mid = []
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pivot) {
            mid.push(arr[i])
        }
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        if (arr[i] > pivot) {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}
let arr = [2, 1, 5, 2, 4, 8, 20, 14, 43, 31, 34, 22]
let sort = quickSort(arr)
console.log(sort);