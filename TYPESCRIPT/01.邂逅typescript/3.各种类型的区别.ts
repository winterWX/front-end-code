// Object 和 object 和 {}

let test: Object = '11'  // 可以赋值任何类型(基本类型和引用类型)

let test1: {} = "22" // 相当于 new Object(), 可以赋值任何类型(基本类型和引用类型)

test1 = { name : '你好'}
test1.age = 20 // 无法修改对象属性和添加对象变量


let test3: object = []  //  可以赋值所有的引用类型，不能赋值基本类型