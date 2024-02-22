function Person(name,age){
    this.parentName = name
    this.parentAge = age
    this.friends = []
}

Person.prototype.eating = function(){
    console.log('Person-吃东西')
}

var ParentObj = new Person('张三', 80)

function Son(name,age){
    this.sonName = name
    this.sonAge = age
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
 *  存在的问题
 *  
 *   1. 子类继承父类时，父类原型上的属性是看不到的，虽然可以拿到，但是看不到，因为原型属性不可以枚举
 *   2. 子类无法将公共的属性和方法保存到父类里，不能进行传值
 *   3. 给子类原型上添加方法或者属性时，多个子类会同时拥有添加的方法，是因为等于给父类添加方法
 *   4. 修改父类引用类型的属性时，所用子类都会改变
 *   
 */