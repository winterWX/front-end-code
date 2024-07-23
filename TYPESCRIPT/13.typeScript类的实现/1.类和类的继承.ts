class Animal {
    // 属性
    name: string;

    // 构造函数
    constructor(name: string) {
        this.name = name;
    }

    // 方法
    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    // 另一个方法
    speak(): void {
        // 在 Animal 类中，我们不知道如何具体“说”，所以可能只是一个占位符
        console.log(`${this.name} makes a noise.`);
    }
}

// 创建一个 Animal 实例
let dog = new Animal("Buddy");

// 调用方法
dog.eat(); // 输出: Buddy is eating.
dog.speak(); // 输出: Buddy makes a noise.
