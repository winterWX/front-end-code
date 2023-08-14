function Person() {
    this.name = '陈丹青'
    this.friends = []
}
Person.prototype.eating = function () {
    console.log(this.name + '在吃饭')
}

function Student() {
    this.sno = '小明'
}

var person = new Person()
Student.prototype = person

// 1.已经将属性和方法添加到了父类的原型上了
Student.prototype.learning = function () {
    console.log(this.sno + '在学习')
}
var stu = new Student()

console.log('打印子类对象', stu)
console.log("父类的属性和方法", stu.name, stu.eating())     // 可以拿到父类的属性 和方法


var stu1 = new Student()
var stu2 = new Student()

// 单个子类修改 父类 引用属性值时，其他子类也会受到影响。 
// 例外: stu1.friends = ['liu de'] 这样就不会印象，因为直接赋值了一个新的引用地址

stu1.friends.push('lili')
// stu1.friends = ['23',645.645]  
console.log(stu1.friends)  // ['lili']
console.log(stu2.friends)  // ['lili']  stu2 也会都一个属性


/**
 * 
 *   主要缺点
 *   1 实例对象上的某些属性是看不到的，比如 p.name 虽然是可以打印出来值的，但是由于它是加在原型上的不可枚举的属性所以看不到
 *   2 实例化对象时，无法做到传值
 *   3 子类修改父类引用类型的元素值时，其他子类也会受到影响，直接改变应用地址时不会受影响
 * 
*/