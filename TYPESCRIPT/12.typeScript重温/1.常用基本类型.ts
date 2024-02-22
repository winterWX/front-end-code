// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6; 

// 字符串
let nameCode: string = "bob";

// 数组
let list: number[] = [1, 2, 3];
let listTest: Array<number> = [1, 2, 3];

// 元组 Tuple
let x: [string, number];
x = ['hello', 10];

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;

// Void
let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// Never
    // Never 是任何类型的子类， never表示那些永远不存在的类型，可以将never赋值给任何类型

// 类型断言
    // 方式一
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
    // 方式二
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;