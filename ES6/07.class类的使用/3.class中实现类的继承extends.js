class Person {
    constructor(name,age){
       this.name = name
       this.age = age
    }
}

// 使用 extends 进行继承
class Student extends Person{
    constructor(name,age,sno){
       /**
        *  继承语法要求super,在this之前或者return对象之前调用
        *  用来初始化父类的构造函数
        */
       super(name,age)
       this.sno = sno
    }
}

var stu = new Student('wx',12,'001')

console.log('stu====',stu)