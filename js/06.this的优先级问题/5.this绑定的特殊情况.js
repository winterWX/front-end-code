
// 当用 call/apply/bind的绑定的时候

function foo(){
    console.log(this)
}

// this指向会变成 全局对象
foo.call(null/undefined)
foo.call(null/undefined)
var j = foo.call(null/undefined)