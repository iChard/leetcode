Array.prototype.selectionSort = function () {
    let len = this.length
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (this[j] < this[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            [this[i], this[minIndex]] = [this[minIndex], this[i]]
        }
    }
    console.log(this)
    return this
}
let arr = [7, 6, 8, 3, 1, 9, 10]
arr.selectionSort()