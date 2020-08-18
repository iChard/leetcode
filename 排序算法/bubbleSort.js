Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (this[i] > this[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    console.log(this)
    return this;
}
let arr = [5, 4, 3];
// let arr = [5, 4, 6, 2, 1, 7,8];

arr.bubbleSort()