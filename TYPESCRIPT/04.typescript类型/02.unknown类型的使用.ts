// unknown 类型的使用

let AprilData:unknown = 'April sky';

// 将unknown类型进行赋值--- 就会报错
//let triple:number = AprilData

/***
 * 
 *  都是顶级类型
 *  unknown 和 any 的区别
 *  unknown 只能赋值给 unknown 和 any
 * 
 *  any 能赋值给任何类型
 * 
*/


/**
 *  any: 表示任意类型， 可以是一个集合， 里面包含了所有的类型.
 * 
 *  unknown:{
 *      表示是所有类型的父级也就是祖先级别的
 *      这里的 unknown 是可以理解成 undefined
 *  }
 * 
 */

// 错误写法
let testUnknown: unknown = 1;
let text:string = testUnknown;

// 正确写法
let textDr:string = 'ni hao';
let unKnown: unknown = textDr;
