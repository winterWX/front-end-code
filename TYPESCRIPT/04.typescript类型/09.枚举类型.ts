// 枚举可以清晰的表达意图或者创建一组有区别的数据

enum Direction {
    // 默认值从 0 开始递增
    NORTH,
    SOUTH,
    EAST='EAST'
}

let dir: Direction = Direction.EAST

console.log('dir===',dir);