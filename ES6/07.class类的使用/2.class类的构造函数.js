class Person{
    /**
     *   class 类的构造函数
     *   1.一个类只能有一个构造函数constructor
     */
    constructor(name,age){
        this.name = name
        this.age = age
        this._address = '大地湾'
    }
    
    // 直接加到  原型上了
    running(){
        console.log(this.name + '在跑步')
    }

    // 类的访问器方法
    get address(){
        return this._address
    }
    
    set address(newVal){
        this._address = newVal
    }
    /**
     * 类的静态方法（类方法）
     * 用类名进行访问 Person.createdPerson
    */
    static createdPerson(){
        return new Person('11',22)
    }
}

var  p = new Person('一一',30)  // new()的几个步奏是一样的
console.log("=======", p.name,p.age)

p.address = 'test'
console.log("p.address===",p.address)

//类方法
var testName = Person.createdPerson()
console.log('testName====',testName)  // { name: '11', age: 22, _address: '大地湾' }