/**
 *  案例 一
*/
var message = "hello code"

function fo(){
    console.log("message",message)
}

function bar(){
    var message = "hello inners"
    fo()
}

bar()

/**
 *   message 的结果是  hello code
 *   主要 函数作用域 是和函数定义的位置有关系，和调用的位置没有关系
 *   fo 函数的作用域就是自己 + 全局 Go, 自己作用域里找不到了，就会去GO里找
 * 
*/