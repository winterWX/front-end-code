//重建Set结构
const set = new Set()

// add 方法
set.add(11)
set.add(11)

console.log('set==',set)  // { 11 }   不会进行重复添加

// delete方法
set.delete(12)  // 需要传删除的元素

// has 方法 -- 是否包含某个元素
set.has(50)

// clear 方法

// set 支持 forEach 和  for...of 遍历


/**
 *  Set应用场景：
 *   1.能添加基本类型和引用类型 
 *   1.不希望进行重复添加
 *   2.对重复数据去重
 * 
 * 
 *  Set是强引用
 * 
 */