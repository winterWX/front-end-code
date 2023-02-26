function Person(name,age){
    this.name = name
    this.age = age
    this.personFn = function(){
        console.log('父类函数')
    }
}

Person.prototype.newAdd = function (){
    console.log('新添加的函数')
}

function Student(name,age,sno){
    Person.call(this,name,age)  // 已经将 Person对象上的属性添加到新创建的类上了
    this.sno = sno
    this.studentFn = function(){
        console.log('子类函数')
    }
}

Student.prototype = Object.create(Person.prototype)
Object.defineProperty(Student.prototype,'constructor',{
    enumerable: false,
    configurable: true,
    writable: true,
    value: Student
})

var stu = new Student('小红',29,"001")
console.log('stu===',stu.test)