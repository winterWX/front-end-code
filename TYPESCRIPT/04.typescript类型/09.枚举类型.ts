// 枚举可以清晰的表达意图或者创建一组有区别的数据

/**
 *  1.默认下表会递增
 *  2.可以指定下标
 *   
*/
enum Direction {
    // 默认值从 0 开始递增
    NORTH,
    SOUTH,
    EAST='EAST'
}

let dir: Direction = Direction.EAST;


console.log('dir===----', Direction.NORTH, Direction.EAST, dir);

// 字符串枚举
enum Direction_Test {
    NORTH_TEST = "NORTH_TEST",
    SOUTH_TEST = "SOUTH_TEST",
    EAST_TEST = "EAST_TEST",
    WEST_TEST = "WEST_TEST",
}

let dir_test: Direction_Test = Direction_Test.NORTH_TEST;
console.log('dir_test===----', Direction_Test.NORTH_TEST);

// 异构枚举 
enum string_number{
    A,
    B,
    C = "C",
    D = "D",
    E = 8,
    F,
}

console.log('=====',string_number[4]);  // 找不到时 会将整个枚举对象打印出来