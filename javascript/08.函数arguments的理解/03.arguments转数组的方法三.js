// ES6， arguments转数组
function foo(){
    // 绑定this对象就是 arguments
    // 相当于 [].slice()
    var newArray = [...arguments]
    var newArray1 = Array.from(arguments)
    console.log(newArray,newArray1)
}
 
foo(1,23,4,5,20,345,56)