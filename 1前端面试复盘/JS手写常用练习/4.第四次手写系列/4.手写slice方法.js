Array.prototype.wxSlice = function (num1, num2) {
    let thisArg = this
    if (!Array.isArray(thisArg)) {
        throw new Error('no a function')
    }
    let start = num1 || 0
    let end = num2 || thisArg.length
    let arr = []
    for (let i = start; i < end; i++) {
        arr.push(thisArg[i])
    }
    return arr
}

let arr = [12, 34, 5345, 6576, 7898, 9, 767, 787]

console.log(arr.wxSlice(0, 3))