// 实现call函数的思路
/***
 *   1.当绑定的this是非对象类型时一定要转成对象
 *   2.除this，绑定的其他参数怎么接收
 *   3.当绑定的this是 null/undefined时,this要指向window
 *   4.怎么实现Call函数的返回值
*/

// 在函数原型上添加自己的Call函数，因为call函数就是Function对象的一个属性
// 将wxCall函数
Function.prototype.wxCall = function(thisArg,...argents){  // call 两个参数，argents是数组类型，而call后面的参数是逗号形式的所以必须展开
   //得到是那个函数调用了wxCall
   //根据this的隐式绑定原理， 此时的this就是foo
   var fn = this
   //判断thisArg是否有值，如果为null/undefined，this就指向window,否则就指向绑定的值
   thisArg = !!thisArg ? Object(thisArg) : window
   thisArg.fn = fn
   //做隐式绑定
   var result = thisArg.fn(...argents)
   delete thisArg.fn  //删除没有有的fn属性
   return result
}

function foo(num1,num2){
    return num1 + num2
}

var result = foo.wxCall('abc',1,2)

console.log('result===',result)
// foo.call({},10,30)