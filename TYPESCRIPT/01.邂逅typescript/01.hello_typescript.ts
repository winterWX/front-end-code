let surname: string = '李三';
let age: number = 19;
let characteristic = '说话大声';

// 数组的定义方式
let list : number[] = [3,4,6];

//泛型方式定义
let list1 : Array<number> = [3,4,6];

//元组类型
let C : [number, string];
C = [10,'你好'];

// 枚举
enum Color { Rad, Green, Blue };
let c: Color = Color.Rad;
