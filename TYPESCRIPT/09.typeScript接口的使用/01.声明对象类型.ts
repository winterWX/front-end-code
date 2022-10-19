// 声明对象类型的方法

/**
 *  1.类型别名
 *  2.接口的形式进行声明 interface
*/


// 1.采用类型别名的方式进行声明
type stInfo = { name: string, age:number }

const data: stInfo = {
    name: 'nihao',
    age: 99
}


// 2.采用接口的形式进行
interface IInfo {
   name: string
   age: number
}

const Obj: IInfo = {
    name:'nihao',
    age:90
}
