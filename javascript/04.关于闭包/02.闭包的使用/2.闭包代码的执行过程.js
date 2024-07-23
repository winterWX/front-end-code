function foo(){
    var name = "li"
    var age = 40
    function bar(){
        console.log(name,age)
    }
    return bar
}

var fn = foo()
fn()


// 全局变量 fn 指着 foo内存地址， 所以函数foo的内部不会被销毁，里面的变量也不会销毁