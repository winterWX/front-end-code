function createdFn(name,age,address){
    return {
        name: name,
        age: age,
        address: address
    }
}

var p1 = createdFn('小小', 20, '北京')
var p2 = createdFn('明明', 40, '广州')
var p3 = createdFn('红红', 50, '大理')


/**
 *  工厂模式：
 *  缺点： 获取不到创建后对象的真实类型，只是一个宽泛的对象而已
 *  优点： 减少了字面量常见对象时的重复代码
*/