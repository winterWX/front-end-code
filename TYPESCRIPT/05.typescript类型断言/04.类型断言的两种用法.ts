// 在自己清楚自己干什么的情况下，进行类型转换

//第一种方式

let data:string  = '你好啊 我是wx';
let counter:number = (<string>data).length;


let data1: string = '你好啊 我是wx';
let couter: number = (data1 as string).length

