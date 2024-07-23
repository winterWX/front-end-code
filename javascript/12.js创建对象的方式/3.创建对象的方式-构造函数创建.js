function Person(name,age,address){
    this.name = name
    this.age = age
    this.address = address
    this.eating = function(){
        console.log(this.name+ '吃东西')
    }
    this.wrok = function(){
        console.log(this.name+ '工作')
    }
}

var p1 = new Person('李三',20,'北京')
var p2 = new Person('王二',40,'广州')

// new 做的事情
// new : {
    //    1. 创建了一个空对象
    //    2. 将对象赋值给了this
    //    3. 最后将对象进行了返回
// }

console.log(p1 === p2)  // false
console.log(p1.eating === p2.eating) // false

/**
 *  结论：创建后的对象是不相等的，每个对象的内部函数也是不相等的
 *  构造函数创建对象：
 * 
 *  优点：明确了创建的具体对象，解决了工厂模式存在的问题
 *  缺点：构造函数内部的函数是相同，但是实例化对象的时候都会在内存里生成一个新的函数对象
 */
