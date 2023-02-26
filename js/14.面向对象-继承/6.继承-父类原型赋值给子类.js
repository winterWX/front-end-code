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
// 减少了 new Person的调用次数
Student.prototype = Person.prototype 

Student.prototype.studing = function(){
    console.log(this.sno + '在学习')
}

var p = new Student()

console.log(p.name)     
console.log(p.eating()) 


/***
 *  父类原型赋值给子类
 *  
 *  存在问题：
 *      1.虽然能继承父类的属性和方法，但是当给子类的原型上添加方法时
 *      实际是将方法加到了父类的原型上了，当实例化不同的对象时，每个对象上都会有相同的方法
 * 
 */
