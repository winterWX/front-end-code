/**
 *  1.在函数调用前，函数的AO对象里是有arguments的
 *  2.arguments是一个类数组对象，但不是数组
 *  3.arguments.length(获取参数长度),arguments[num](获取某个索引)，arguments.callee(获取当前函数)
 * 
*/

function foo(){
   console.log(arguments)  // [Arguments] { '0': 1, '1': 23, '2': 4, '3': 5 }
   console.log(arguments.length) // 4
   console.log(arguments[2]) // 4
   console.log(arguments.callee) // Function foo


   // arguments 转数组基本方法
   var newArray = []
   for(i = 0 ; i < arguments.length;  i ++ ){
        newArray.push(arguments[i])
   } 
   console.log('newArray==',newArray) 
}

foo(1,23,4,5)