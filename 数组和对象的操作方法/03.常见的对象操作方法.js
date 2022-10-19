/**
 *  操作对象的常用方法
*/

// Object.keys()
// Object.values()
// Object.assign()
// Object.entries()  //会将 key和value 分成两个对应数组
// Object.fromEntries()  //会将两个数组整合到一起
// Object.getOwnPropertyNames()  //获取对象上的所有属性，返回一个数组
// Object.defineProperty()  //设置单个对象属性
// Object.defineProperties() //设置多个对象属性
// Object.freeze()   //对象冷冻,不能修改，添加，删除属性，也不能修改对象的原型


/**
 * Object.formEntries() 的用法
*/

let interAble =  new Map([['foo','bar'],[12,40]])  //map 可以传入一个entries

let Obj = Object.fromEntries(interAble);

console.log('Obj===',Obj)


/**
 * Object.getOwnPropertySymbols
*/

let press ={}
let R = Symbol('roger');
let S = Symbol('Syd');
press[R] ={
    name : 'wx'
}
press[S] ={
    age: 300
}
console.log('获取symbols的属性',Object.getOwnPropertySymbols(press));

// 创建一个唯一属性
let name = Symbol('name');
let age  = Symbol('age');
let data ={
    [name]: 'wx',
    [age]: 100
}

console.log('=====',data[age]);
