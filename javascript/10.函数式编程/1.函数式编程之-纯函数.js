/**
 *  纯函数：是函数式编程的重要组成部分
 *  纯函数：{
 *      1. 相同的输入就会产生相同的输出，不管在任何地方调用
 *      2. 函数在执行过程中不会产生副作用，不会改变函数外的任何参数
 *      3. 函数只是依赖传入的参数
 *  }
 * 
*/

var arr = [12,23,34,5,6]
var lastArr = arr.slice(0,4)

console.log('arr', arr)   //原数组没有发生变化
console.log('lastArr', lastArr)   //会产生一个新的数组



var  arr1 = [12,23,34,5,6]
var lastArr2 = arr.splice(0,4)

console.log('arr',arr1)   //原数组发生变化了
console.log('lastArr',lastArr1)   //产生一个新的数组

// 结论：slice 是一个纯函数,splice不是一个纯函数。因为splice改变了原来的函数，产生了副作用