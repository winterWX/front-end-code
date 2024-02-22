// 泛型函数一
function testFunction<T>(arg: T): T{
    return arg 
}

testFunction<string>('addas');

// 泛型函数和非泛型函数
function identity<T>(arg:T) : T {
    return arg
}

let myIndentity: <T>(arg: T) => T = identity;
let myIndentity2: { <T>(arg : T) : T } = identity;

