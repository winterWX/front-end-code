
// static 只能是构造函数本身调用 static的方法，其中的this指向也只能调用有static的属性和方法。

class Person{
    static useName : string = ''
    static attendClass(){}
}

// 只能通过类名来访问
Person.useName
Person.attendClass()

export {}