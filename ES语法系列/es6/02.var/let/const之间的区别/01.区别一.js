var foo = '11'
var foo = "222"

// 区别一： var可以进行重复声明，let/const不能进行重复声明

/**
 * 
 * 区别二： {
 *    1.let一般声明变量，const声明常量
 *    2.let 声明的变量可以进行重新赋值，const如果声明的常量时基本类型，则不可以进行重复赋值
 *    如果时引用类型则可以对引用类型的属性进行修改
 * }
 * 
*/


// 区别三： var有作用域提升，let/const没有作用域提升
console.log(bar)  // 此时已经在词法环境被创建出来了，但是不能被访问
let bar = '11'

/**
 * 
 *  区别四： let/const和 window之间的关系
 *    
 *  var 声明的变量会直接放到window对象上，而let/const不会放到window对象上，
 *  会保存到 variable_的对象上
 * 
 */


/**
 *  区别五： let/const 有块级作用域， {}, if(){},for(){}, var只有全局作用域和函数作用域
 * 
 */