
/**
 *  表示只读，用来防止在构造函数之外对属性进行赋值（只能修饰属性，不能修饰方法）
 *  只读属性可以在构造函数内赋值
 */

class NameArray {
    // 只读属性可以在构造函数内赋值
    readonly single:string
    constructor(single:string) {
        this.single = 'nnn'
    }
}

let P = new NameArray('mm')

P.single //可以拿到参数的值

// 不能对参数进行修改
P.single = '999'

export {}