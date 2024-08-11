let a1:symbol = Symbol(1);
let a2:symbol = Symbol(1);

// 创建唯一的key
console.log(a1 === a2);  // false

// 先全局找有没有创建，没有就会创建，有的话直接用
console.log(Symbol.for('test') === Symbol.for('test'));

const test = {
    name: '111',
    [a1]: 'nnn',
    [a2]: 'mmmm'
}
// for in, Object.keys(),Object.getOwnPropertySymbol 都是读不到symbol的值的
// Object.getOwnPropertySymbol是可以读到symbol,但是读不到其他属性

// 同时读取所有属性  Reflect.ownKeys(obj)


console.log("------",test[a1]);