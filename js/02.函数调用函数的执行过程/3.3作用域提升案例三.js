/**
 * 案例一
*/

function boo(){
    var a = b = 100
    /**
     *  var a  = 100 - 局部
     *  b = 100  - 会添加到全局
    */
}

console.log(a)    // undefined
console.log(b)    // 100