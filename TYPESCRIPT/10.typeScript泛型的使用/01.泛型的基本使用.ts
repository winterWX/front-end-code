// l. 类型的参数化

/**
 *  定义函数时，函数的入参不能确定,入参的类型也不能确定
 *  所以由调用者告知
*/

function addSum<T>(num: T): T{
   return num
}

// 调用时给定类型
addSum<number>(20);
addSum<{name:string}>({name:'wx'});

function fo<T=number,K=number>(a: T,b:K):Array<T | K>{
   return [a,b]
}

fo(1,false);

// ----- keyof 的用法
// keyof 筛选出key
const info = {
   name: 'hello',
   age: 21
};

type key = keyof typeof info;
function infoFn<T extends Object, K extends keyof T>(obj: T, key: K){
   return obj[key]
};

// keyof的高级的用法, 遍历属性
interface test1{
   name: string,
   age: number,
   sex: string
}

type Options<T extends object> = {
   [key in keyof T]? : T[key]
}

type B = Options<test1>