function Person(){
    this.name = '陈丹青'
    this.friends = []
}

Person.prototype.eating = function(){
    console.log(this.name + '在吃饭')
}

function Student(){
    this.sno = '小明'
}

var person = new Person()
Student.prototype = person 

Student.prototype.studing = function(){
    console.log(this.sno + '在学习')
}

var stu = new Student()

console.log(stu.name)     // 可以拿到父类的name
console.log(stu.eating())   // 可以拿到父类的方法


/** 原型链实现继承的弊端 */

/**
 *  1.实例对象上的某些属性是看不到的，比如 p.name 虽然是可以打印出来值的，
 *    但是由于它是加在原型上的不可枚举的属性所以看不到
*/

/** 
 *   2.获取引用，修改引用类型的值, 会互相影响
*/

var stu1 = new Student()
var stu2 = new Student()

stu1.friends.push('lili')  // 修改的是引用地址的某个值。 stu1.friends = ['liu de'] 这样就不会印象，因为直接赋值了一个新的引用地址
console.log(stu1.friends)  // ['lili']
console.log(stu2.friends)  // ['lili']  stu2 也会都一个属性

/** 
 *  3.创建类时无法做到传值, 因为我们想把公共的属性和逻辑放到父类上
 *   new Student('111','222')
*/