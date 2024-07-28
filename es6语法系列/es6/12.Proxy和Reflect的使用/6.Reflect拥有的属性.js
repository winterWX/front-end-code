/**
 *   Reflect 
 * 
 *   拥有 Proxy类型方法 对应的所有属性
 *   
 *   常用的：
 * 
 *   get
 *   set
 *   has
 *   deleteProperty
 *   apply
 *   construct
 *   等 .....
*/


// Reflect construct 的用法
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

class Teacher{

}

const p = new Person('wx',19)

// 执行 Person 构造函数， 创建Teacher 类
const teacher = Reflect.construct(Person,['wx',19],Teacher)

console.log('=====teacher',teacher);