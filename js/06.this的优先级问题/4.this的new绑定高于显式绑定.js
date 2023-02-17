// 注意 new 绑定和call/apply不能一起使用

// new 和 bind 进行比较

function foo(){
    console.log(this)
}

var bar = foo.bind('aaa')

var h = new bar()