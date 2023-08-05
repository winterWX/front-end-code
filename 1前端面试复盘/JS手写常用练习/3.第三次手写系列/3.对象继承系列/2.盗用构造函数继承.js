function Person(name,age){
    this.parentName = name
    this.parentAge = age
    this.friends = []
}
Person.prototype.eating = function(){
    console.log('Person-吃东西')
}
var ParentObj = new Person('张三', 80)

function Son(name,age,sok){
    Person.call(this,name,age)
    this.sok = sok
}

Son.prototype.eating = function(){
    console.log('Son-吃东西')
}

// 继承：
Son.prototype = ParentObj

var son = new Son('张张', 18)


console.log("======",son.eating())


/**
 *  可以实现继承
 * 
 *  解决了 原型链继承存在的问题
 * 
 *  但是依然存在问题， 
 *  
 *  1. 父类函数至少被调用了两次
 *  2. 子类constructor 仍然指向父类
 *   
 */