// 绑定规则的优先级  显式绑定高于隐式绑定

function foo(){
    console.log(this)
}
var obj = {
    name: 'obj',
    bar: foo.bind('111')
}
obj.bar()