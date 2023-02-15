
// 默认绑定: 函数是独立调用的

/** 案例一 */
function foo(){
    console.log(this)
}

foo()  // window  ---- 独立调用


/**  案例二 */
var obj = {
   foo: function(){
      console.log(this)
   }
}

var fn = obj.foo
fn()  // this为window


/** 案例三 */
function fn1(){
    function fn2(){
        console.log(this)
    }
    return fn2
}
var n = fn1()
n() //window ---- 独立调用，没有调用主题