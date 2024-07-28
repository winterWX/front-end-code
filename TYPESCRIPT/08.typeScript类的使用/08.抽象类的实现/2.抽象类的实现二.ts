
// 1.抽象类不能被实例化，只能被继承
// 2.抽象类继承在抽象类中，可以不实现，表示属于该抽象类的一个方法，如果继承的非抽象类中，那么抽象类的方法必须需要实现

// 作用 - (抽象类对事物进行抽象，更多的是为了继承，为了扩展，为了实现代码的重用)


namespace a {
    abstract class Person {
      name: string;
      abstract speak(): void;
    }
  
    class Man extends Person {
      // 如果不实现此方法，那么会报错：非抽象类“Man”不会实现继承自“Person”类的抽象成员“speak”。ts(2515)
      speak(): void {
        console.log('说话');
      }
    }
  
    abstract class Woman extends Person {
      // 抽象类继承抽象类，可以不用具体实现，表述属于抽象类的一个方法
      abstract speak(): void;
    }
  
    class Girl extends Woman {
      // 如果不实现此方法，那么会报错：非抽象类“Man”不会实现继承自“Person”类的抽象成员“speak”。ts(2515)
      speak(): void {
        console.log('唱歌');
      }
    }
  
    // let p = new Person() // 报错：无法创建抽象类的实例。ts(2511)
    let m = new Man();
    m.speak(); // 调用后打印 说话
    let g = new Girl();
    g.speak(); // 调用后打印 唱歌
  }
  