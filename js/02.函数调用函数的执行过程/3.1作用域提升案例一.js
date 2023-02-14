

/**
 *    案例一
 */

var  n = 100 
function foo(){
   n = 200
}
foo()
console.log(n)   // 200


// 按照函数执行过程进行分析




/**
 *  案例二
*/
function foo(){
    console.log("n - 1",n)
    var n = 200
    console.log("n - 2",n)
}

var n = 100
foo()
//  结果  undefined / 200

// 因为 foo里定义了n   foo: { n : undefined }
