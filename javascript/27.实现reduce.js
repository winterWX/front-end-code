
// 实现各种手写 https://segmentfault.com/a/1190000021758529


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue ? initialValue : this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        let _this = this;
        accumulator = callback(accumulator, this[i], i, _this);
    }
    return accumulator;
};

// 使用 
let arr = [1, 2, 3, 4];
let sum = arr.myReduce((acc, val) => {
    acc += val;
    return acc;
}, 5);

console.log(sum); // 15