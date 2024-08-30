/***
 *  实现一：
 *  防抖的基本解构 +  this绑定和参数传递
 * 
*/

function debounce(fn,time){
    // 定义一个定时器，保存定时器
    let timer = null
    return function(...args){   // 这个args是触发input事件时的参数，input框本身是有event的。 input触发实际调的是这个函数
        // 清除前一次的timer
        if(timer){ clearTimeout(timer) }
        // 每触发一次事件就会生成一个timer,timer是唯一的
        timer = setTimeout(()=>{
            fn.apply(this,args) // this 拿的是调用者的this，元素事件，这里的this就是元素
        },time)
    }
}