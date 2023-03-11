/**
 *  案例一
*/
console.log(a)  // undefined
var a = 1 


console.log(b)  // referenceError cannot
let b = 1 

/**  
 *   案例一分析： 
 *   js词法解析过程，就会有变量提升和函数提升，变量是只提升不赋值，函数是整体提升
 *     对于var而言，代码在解析的时候变量已经存在了先打印结果后赋值是不会报错的，而且值为undefined。
 *     对于let/const而言，变量没有提升，所以在声明前打印结果就会出错
 */