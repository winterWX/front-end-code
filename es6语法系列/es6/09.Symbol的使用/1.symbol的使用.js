/**
 *  1.symbol会产生一个独一无二的值，即使默认值一样也不会产生
 *  2.symbol函数前 不能使用new
 *  3.symbol可以转为Boolean 和字符串
 *  4.Object.getOwnPropertySymbols进行遍历
*/

let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"