function Person(name,age){
    this.name = name
    this.age = age
}

function Student(sex,car){
    this.sex = sex
    this.car = car
}

const person = new Person('wh',40)

const stu = new Student('男','奥迪')

// stu 想继承 Person的属性
stu.prototype = person
Student.prototype.eating = function(){
    console.log('学生正在吃饭=====')
}

console.log('stu.prototype===',stu)
console.log('stu.prototype=== 方法',stu.eating())