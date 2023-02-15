
function Person(name,age){
    this.name = name
    this.age = age
}

var n = new Person('ko',30)

// 1. new Person() 后函数内部会生成一个 this 对象
// 2. 将new Person时传递的值 赋给this对象
// 3. 最后将这个this对象 返回出去， n 就代表这个this对象