

/**
 *   常用概念
 *   
 *   高阶函数： 一个函数的参数为函数，并且会返回一个函数的函数称为高阶函数
 *     
 *   function 和 method的区别
 * 
 *   function : 作为一个独立的函数使用时
 *   method: 作为某一个对象的一个方法时
*/


var  arr = [12,34,34,5,6]

var filterArr = arr.filter(function(item){
   return  item % 2 === 0
})

// filterArr 为一个新的数组， 每一项的返回值都是 boolean, 符合条件的就是true,会加入到新的数组里


// reduce方法接收两个参数reduce(function,初始值)
var  reduceArr = arr.reduce(function(pre,cur){
    return  pre +  cur
},0)