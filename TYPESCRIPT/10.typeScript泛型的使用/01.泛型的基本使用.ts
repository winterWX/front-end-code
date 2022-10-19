// l. 类型的参数化

/**
 *  定义函数时，不决定函数的类型
 *  而是调用者以参数的形式告知函数的参数应该是什么类型
*/

function addSum<Type>(num: Type): Type{
   return num
}

// 调用时给定类型
addSum<number>(20);
addSum<{name:string}>({name:'wx'});