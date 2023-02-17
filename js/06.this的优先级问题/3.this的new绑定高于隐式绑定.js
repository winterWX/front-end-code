// new 的优先级高于 隐式绑定

var obj = {
    name : 'obj',
    foo: function(){
        console.log(this)   // f
    }
}

var f = new obj.foo()