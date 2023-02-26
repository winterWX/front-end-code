// function Person(name,age,address){
//     this.name = name
//     this.age = age
//     this.address = address
//     this.eating = function(){
//         console.log(this.name+ '吃东西')
//     }
//     this.wrok = function(){
//         console.log(this.name+ '工作')
//     }
// }

// var p1 = new Person('李三',20,'北京')
// var p2 = new Person('王二',40,'广州')


// 将上面的 代码进行改造


function Person(name,age,address){
    this.name = name
    this.age = age
    this.address = address 


     /**
      * 
      * 
      * 不能将对像的私有属性放到 原型上
      * 因为创建p1对象时,p1传递进来的值 会对prototype上的属性进行赋值
      * 创建p2对象时,p2传递进来的值 又会对prototype上的属性进行重新赋值，会把之前的值覆盖
      * 导致p1获取到的属性值是p2的
      * 
      * 因为  p1.__proto__ 指向 foo.prototype
      *       p2.__proto__ 指向 foo.prototype
      *     foo.prototype 改变后 p1 和 p2 都会受到影响
      * 
      *    
    */

    // Person.prototype.name = name
    // Person.prototype.age = age
    // Person.prototype.address = address
    
}

// 将函数放到原型上，不用每次都进行创建. 因为函数在每个对象调用上所执行的内容都是一样的
Person.prototype.eating = function(){
    console.log(this.name+ '吃东西')
}
Person.prototype.wrok = function(){
    console.log(this.name+ '工作')
}

var p1 = new Person('李三',20,'北京')
var p2 = new Person('王二',40,'广州')