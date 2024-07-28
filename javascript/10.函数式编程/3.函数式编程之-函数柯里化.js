/**
 *  什么是柯里化：
 *  把接收多个参数的函数，变成只传递一部分参数的函数，调用它，再让它返回一个函数去处理剩余的参数
 *  这个过程就是柯里化
 * 
 * 
 *   柯里化的优点：
 *   1.单一职责：尽可能的使函数处理逻辑单一，每一步完成自己单一的逻辑，使得逻辑清晰
 *   2.逻辑复用：某一单一的逻辑可以在函数内部得到复用，减少代码的冗余
 *   
 */


function sum(x,y,z){
    return x+y+z
}

console.log(sum(1,2,3))


// 柯里化一
function sum1(a){
    return function(b){
        return function(c){
            return  a + b + c
        }
    }
}

//柯里化简写
var result = x=>y=>z=> x+y+z
console.log(result(1)(2)(3))
console.log(sum1(1)(2)(3))
