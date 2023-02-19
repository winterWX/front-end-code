// 实现apply函数的思路
/***
 *   1.当绑定的this是非对象类型时一定要转成对象
 *   2.除this，绑定的其他参数怎么接收
 *   3.当绑定的this是 null/undefined时,this要指向window
 *   4.怎么实现apply函数的返回值
 * 
*/

// 在函数原型上添加自己的apply函数，因为apply函数就是Function对象的一个属性
Function.prototype.wxApply = function(thisArg,argents){  // apply 两个参数，argents是数组类型，而apply后面的参数是数组，所以不需要展开
   //得到是那个函数调用了wxApply
   //根据this的隐式绑定原理， 此时的this就是foo
   var fn = this
   //判断thisArg是否有值，如果为null/undefined，this就指向window,否则就指向绑定的值
   thisArg = !!thisArg ? Object(thisArg) : window
   thisArg.fn = fn
   //做隐式绑定
   var resArg = argents || []  // 防止没有传参数时
   var result = thisArg.fn(...resArg)
   delete thisArg.fn  //删除没有有的fn属性
   return result
}

function foo(num1,num2){
    return num1 + num2
}

var result = foo.wxApply('abc',[1,2])

console.log('result===',result)