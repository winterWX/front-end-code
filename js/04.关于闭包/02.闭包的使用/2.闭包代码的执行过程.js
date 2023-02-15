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