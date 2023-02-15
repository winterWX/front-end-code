/**
 * 
 * 隐式绑定： 函数的调用位置是通过某个对象发起的函数调用
 * 
 */


/**
 * 案例一
*/
var obj = {
    foo: function(){
        console.log(this)
    } 
}
obj.foo()  // obj



/** 案例二 */
var obj = {
    foo: function(){
        console.log(this)
    }
}
var obj2 = {
    foo: obj.foo
}

obj2.foo()  // this 为 obj2