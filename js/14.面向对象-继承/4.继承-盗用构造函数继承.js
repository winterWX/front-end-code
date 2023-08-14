function Person(name, age, friends) {
    //这里this就相当于new出来的对象了
    this.name = name
    this.age = age
    this.friends = friends
    this.eating = function () {
        console.log('父类方法')
    }
}

Person.prototype.eating = function () {
    console.log(this.name + '在吃饭 ~~~ 我是父类原型上的方法')
}

function Student(name, age, friends, sno) {
    Person.call(this, name, age, friends)
    this.sno = sno
}

Student.prototype.learning = function () {
    console.log(this.sno + '在学习 ~~~ 我是子类原型上的方法')
}

var stu = new Student('小美', 20, ['liu liu'], 1)

console.log("--子类--", stu)   // 可以拿到父类的name
console.log(stu.name)     // 可以拿到父类的name


/** 借用构造函数继承解决了 - 原型链实现继承的弊端 */
/**
 *  1.实例对象上的某些属性是看不到的，比如 p.name 虽然是可以打印出来值的，
 *    但是由于它是加在原型上的不可枚举的属性所以看不到
 * 
 *  借用构造函数继承  -- 已经将属性加到了对象上了
*/
/** 
 *   2.获取引用，修改引用类型的值, 会互相影响
 *   借用构造函数继承  -- 直接进行了赋值，重新给了一个引用地址   
 * 
*/

var stu1 = new Student('梨花', 23, ['111', '333'], 1)
var stu2 = new Student('梨花', 24, ['一一', '二二'], 2)

console.log(stu1.friends)
console.log(stu2.friends)

/**
 *  3.创建类时无法做到传值, 因为我们想把公共的属性和逻辑放到父类上 
 *  借用构造函数继承  -- 可以传参了
 * 
*/

/***
 *  借用构造函数存在的弊端 
 * 
 *  1.子类实例化的时候， 父类对象会额外的加一些没有必要的属性，因为每个子类拥有的属性或者方法，不一样
 *  2.子类不能继承父类原型上的属性和方法
 * 
*/