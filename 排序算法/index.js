const arr = [4, 2, 5, 3, 1]// , 11, 9, 7, 16, 23, 14, 34, 28, 32, 0, -2, 32 // 27, 89, 09, 109, 234, 23, 14, 78, 90, 235, 476
// 冒泡
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function myBubbleSort(arr) {
    console.time('冒泡耗时：');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    setTimeout(() => {
        console.timeEnd('冒泡耗时：')
    }, 0)
    console.log('冒泡result: ', arr);
    return arr
}
// myBubbleSort([...arr])

/**
 * 选择排序
 * 1.第一遍完全循环，最小索引min为i
 * 2.第二遍循环，从i右边到最后一个逐步对比,索引为j，当j小于min时，min=j，继续循环，一直找到剩下数据中最小的数据，至此第一步循环找到最小的数，置换i和min即可
 * 3.重复第1、2步
 */
function selectionSort(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    console.log('选择result: ', arr);
    return arr;
}

// selectionSort([...arr])

function quickSort(arr) {
    quick(arr, 0, arr.length - 1)
    console.log('快排：', arr);
    return arr
}
function quick(arr, left, right) {
    if (arr.length > 1) {
        let index = partition(arr, left, right)
        // 两半局部有序分开  递归排序 分而治之
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        if (index < right) {
            quick(arr, index, right)
        }
    }
}
function partition(arr, left, right) {
    //将数组 以pivot 为标准 划分为 两半 局部有序的
    let pivot = arr[Math.floor((left + right) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return i
}
quickSort(arr)
