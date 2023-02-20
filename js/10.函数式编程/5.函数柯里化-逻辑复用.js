function sum(n,m){
    return  n + m 
}

// 如果需要给 2做运算
sum(2,10)
sum(2,20)

// 上面调用的时候每次都要传2，
// 用柯里化处理上面的函数

function curryingFn(num1){
    // 此区域的代码得到了复用，包括参数
    return function(num2){
        return num1 + num2
    }
}

var lastResult = curryingFn(2) // 固定参数得到复用，也是利用闭包的原理参数得到了保留
lastResult(10)
lastResult(20)