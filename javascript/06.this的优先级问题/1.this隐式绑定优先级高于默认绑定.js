// 绑定规则的优先级  隐式绑定高于默认绑定

function foo(){
    console.log(this)
}

foo()

var obj = {
    name: 'obj',
    foo: foo
}
obj.foo()