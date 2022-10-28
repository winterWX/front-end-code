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