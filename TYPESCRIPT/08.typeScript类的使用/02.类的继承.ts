class Person{
    name: string
    age:number
    constructor(name: string,age:number){
       this.name = name,
       this.age = age
    }
    eat(){
        console.log('吃饭啊----');
    }
}

class Student extends Person{
    son: number
    constructor(name:string,age:number,son:number){
        super(name,age)
        this.son = son
    }
    eat(){
        super.eat()  // 可以调用父类的方法，先执行父类的方法后执行子类的方法。
        console.log('子类可以重新父类的方法');
    }
}

let data = new Student('wx',19,9999)
console.log('打印data的所有属性',data.name,data.age,data.son)
data.eat()

export {}