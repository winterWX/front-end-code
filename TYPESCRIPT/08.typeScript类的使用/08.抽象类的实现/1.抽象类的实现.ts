//  多态
    // **定义：**父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现。

    // 抽象类
    // ts中的抽象类，是提供其他类继承的基类，不能直接被实例化。

    // 用abstract关键字定义抽象类抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

    // abstract抽象方法只能放在抽象类里面

    // 抽象类和抽象方法用来定义标准，例如：Animal中的抽象方法在子类中必须存在

    // * 抽象类对事物进行抽象，更多的是为了继承，为了扩展，为了实现代码的重用


    abstract class Animal{
        name:string;
        constructor(name:string){
            this.name = name
        }
        // 抽象方法不包含具体实现并且必须在派生类中实现。
        // 抽象类里的抽象方法在子类中必须存在，否则报错
        abstract eat():any;
        run() { console.log('其他方法在子类中可以不识闲'); }
    
    }
    // 错误：不能直接被实例化。
    // let a = new Animal();
    
    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }
        eat(){
            console.log(`${this.name}吃粮食`);
        }
    }
    
    var d = new Dog('小黑')
    d.eat()
    
