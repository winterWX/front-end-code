// 混入的基本用法
    // 1.对象的混入
    // 2.类的混入
interface A{
    name: string
}
interface B{
    age: number
}

let a:A = {
    name: 'hello' 
}
let b:B={
    age: 20
}

// 1.解构混入
let n = { ...a, ...b };  // 扩展运算符，返回新的类型
let n1 = Object.assign({},{...a},{...b});  // 返回的交叉类型