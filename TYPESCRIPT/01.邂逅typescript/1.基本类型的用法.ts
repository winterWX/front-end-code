let surname: string = '李三';
let age: number = 19;
let NaNTitle: number = NaN;  // 可以定义NaN
let InfinityTitle: number = NaN;  // 可以定义Infinity 无穷大

// 数组的定义方式
let list : number[] = [3,4,6]; 
// 多维数组的定义
let listCopy: number[][]= [[1],[2]];

//泛型方式定义
let list1 : Array<number> = [3,4,6];
let listCopy1: Array<Array<number>>= [[1],[2]];


//元组类型
let C : [number, string];
C = [10,'你好']; 

// 枚举
enum Color { Rad, Green, Blue };
let c: Color = Color.Rad;
