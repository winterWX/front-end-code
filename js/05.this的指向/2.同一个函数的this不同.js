
function foo(){
    console.log(this)
}

foo()   // window

var obj = {
    name: "li",
    foo:foo
}

obj.foo()  //obj

foo.apply('abc')   // 'abc'


// 结论： this指向什么，跟函数所处的位置没有关系
//       跟函数的调用方式有关系