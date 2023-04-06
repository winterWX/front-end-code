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
Son.prototype = Person.prototype

var son = new Son('张张', 18)


console.log("======",son.eating())


/**
 *  可以实现继承
 * 
 *  解决了 盗用构造函数  继承存在的问题
 * 
 *  但是依然存在问题， 
 *  
 *  1. 修改子类原型 等于 修改了父类原型，多个子类都会受到影响
 *  2. 子类constructor 仍然指向父类
 *   
 */