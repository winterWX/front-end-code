/**
 *  setTimeout 里的this
 */

setTimeout(function(){
    console.log(this) // window,  因为在setTimeout里函数是独立调用的
},100)


/**
 *  点击事件里的this
*/
var  div_dom =  document.querySelector(".box")

div_dom.onClick = function(){
    console.log(this)    // div_dom 对象， 隐式绑定了this
}


/** 数组方法 */
var arr = [12,3,4,5,5,6]
arr.forEach(function(item){
    console.log(item, this)  // 这里函数是直接调用，所以this 是window
})

// 其实函数也可以指定this的

arr.forEach(function(item){
    console.log(item, this)  // 这里函数.call()显式的绑定了this，所以this 是abc
},'abc')
