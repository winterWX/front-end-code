function Person(name, age, friends) {
    //这里this就相当于new出来的对象了
    this.name = name
    this.age = age
    this.friends = friends
}
Person.prototype.eating = function () {
    console.log(this.name + '在吃饭')
}

function Student(name, age, friends, sno) {
    // 通过call把 this指向了Student,相当于拷贝了一份父函数的内容到student里
    Person.call(this, name, age, friends)
    this.sno = sno
}

Student.prototype = new Person()

Student.prototype.learning = function () {
    console.log(this.sno + '在学习')
}

var p = new Student('黄小明', 30, ['11', '22'], 90)

console.log(p.name)
console.log(p.eating())


/***
 *  组合式继承
 *  
 *  存在问题：
 *      1.父类至少调用了两次。
 *      2.子类和父类里出现了重复代码
 * 
*/