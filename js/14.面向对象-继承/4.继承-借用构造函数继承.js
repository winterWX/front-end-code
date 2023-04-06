function Person(name,age,friends){
    //这里this就相当于new出来的对象了
    this.name = name
    this.name = age
    this.friends = friends
}

Person.prototype.eating = function(){
    console.log(this.name + '在吃饭')
}

function Student(name,age,friends,sno){
    Person.call(this,name,age,friends)
    this.sno = sno
}

var per = new Person()
Student.prototype = per 

Student.prototype.studing = function(){
    console.log(this.sno + '在学习')
}

var stu = new Student()
 
console.log(stu.name)     // 可以拿到父类的name
console.log(stu.eating())   // 可以拿到父类的方法


/** 借用构造函数继承解决了 - 原型链实现继承的弊端 */

/**
 *  1.实例对象上的某些属性是看不到的，比如 p.name 虽然是可以打印出来值的，
 *    但是由于它是加在原型上的不可枚举的属性所以看不到
 * 
 *  借用构造函数继承  -- 已经将属性加到了对象上了
*/

/** 
 *   2.获取引用，修改引用类型的值, 会互相影响
 *  
 *   借用构造函数继承  -- 直接进行了赋值，重新给了一个引用地址   
 * 
*/

var stu1 = new Student('梨花',23,['111','333'],001)
var stu2 = new Student('梨花',24,['一一','二二'],002)

console.log(stu1.friends) 
console.log(stu2.friends)  

/** 
 *  3.创建类时无法做到传值, 因为我们想把公共的属性和逻辑放到父类上
 * 
 *  借用构造函数继承  -- 可以传参了
 * 
*/



/*** 借用构造函数存在的弊端 
 * 
 *  1.父类函数至少被调用了两次
 *  2.实例化的父类对象会额外的加一些没有必要的属性
 *
*/