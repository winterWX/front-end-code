function Person(name, age, friends) {
    // 这里this就相当于new出来的对象了
    this.name = name;
    this.age = age;
    this.friends = friends;
}

Person.prototype.eating = function () {
    console.log(this.name + '在吃饭');
}

function Student(name, age, friends, sno) {
    // 通过call把 this指向了Student,相当于拷贝了一份父函数的内容到student里
    Person.call(this, name, age, friends);
    this.sno = sno;
}

Student.prototype = new Person();

Student.prototype.learning = function () {
    console.log(this.sno + '在学习');
}

var p = new Student('黄小明', 30, ['11', '22'], 90);

console.log(p.name);
console.log(p.eating());


/**
 * 
 *  组合式继承
 *  
 *  存在问题：
 *    1.在使用组合继承时，每次创建子类实例都会调用一次父类的构造函数，导致父类的属性被重复定义。
 *    2.原型链继承会将父类的属性方法复制到子类的原型上，可能导致内存占用过大。
 *    3.组合继承需要调用两次父类的构造函数，一次是在子类的构造函数中调用 Parent.call(this)，一次是通过 Child.prototype = new Parent() 实现原型继承。
 *          这样做既增加了调用次数，也可能导致父类构造函数中的逻辑被执行多次。
 * 
*/ 