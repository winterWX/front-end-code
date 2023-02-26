
/**
 *  原型式继承的初衷是
 *  
 *  不会将父类的原型对象直接赋值给子类的原型
 *  而是创建了一个新的对象，将父类的原型对象直接赋值给了这个新创建的对象的原型，
 *  中间承接了一下
 * 
*/
var obj = {
    name : 'hello',
    age: 30
}
// 分装中间函数1
function createdFn1(o){
    function Fo(){}
    fo.prototype = o
    return new Fo()
}
// 分装中间函数2
function createdFn2(o){
    var obj = {}
    Object.setPrototypeOf(obj,o)
    return obj
}

// 分装中间函数3
Object.create(obj)

var  info = createdFn1(obj)
var  info1 = createdFn2(obj)
var  info2 = Object.create(obj)


/**
 *  存在的问题
 * 
 *   1.想给对象加属性和方法，就会产生重复的代码
 *   因为要给每个对象都要重复加
 *  
 */

