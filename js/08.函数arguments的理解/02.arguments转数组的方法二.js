function foo(){
    // 绑定this对象就是 arguments
    // 相当于 [].slice()
    var newArray = Array.prototype.slice.call(arguments) 
    console.log(newArray)
}
 
foo(1,23,4,5,20,345,56)