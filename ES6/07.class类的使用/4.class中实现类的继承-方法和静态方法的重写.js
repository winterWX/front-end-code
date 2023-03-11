class Person{
   constructor(name,age){
        this.name = name
        this.age = age
   }
   eating(){
        console.log('eating---')
   }
   personMethod(num1,num2){
       console.log("逻辑一",num1)
       console.log("逻辑二",num2)
       console.log("逻辑三")
   }
   static fun1(){
        console.log('Person---fun1')
   }
   static fun2(){
        console.log('Person---静态1')
        console.log('Person---静态2')
        console.log('Person---静态3')
   }
}

class Students extends Person{
   constructor(name,age,sno){
       super(name,age)
       this.sno = sno
   }
   studentsFun(){
        console.log('studentsFun===')
   }

   //子类完全重写父类的方法
   eating(){
       console.log('子类完全重写父类的方法')
   }
   //子类在父类的基础上添加自己的逻辑
   personMethod(){
       super.personMethod(1,2)
       console.log("逻辑4")
       console.log("逻辑5")
       console.log("逻辑6")
   }

    //子类完全重写父类的静态方法
    static fun1(){
        console.log('Students----fun1')
    }
    //子类在父类静态方法的基础上添加自己的逻辑
    static fun2(){
        super.fun2()
        console.log("Students - 逻辑4")
        console.log("Students - 逻辑5")
        console.log("Students - 逻辑6")
    }
}


var stu = new Students('wx',18,"002")

console.log(Object.getOwnPropertyDescriptors(stu.__proto__))  /**
   子类上并不会出现父类的方法，只有通过继承才会有
*/
stu.eating()
stu.personMethod()

//静态方法
Students.fun1()
Students.fun2()

/**
 *  super 的两大用途
 *  1.初始父类的构造函数
 *  2.方法逻辑重写时，复用父类的逻辑
 */