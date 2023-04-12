
// setTimeOut:{
//     1. 是手动设置频率时间,由浏览器调用回调函数
//     2. 由于是宏任务，在执行时可能打不到浏览器相同的频率，会造成抖动
// } 


// requestAnimationFrame: { 
//     1.不管理回调函数, 会在浏览器下一次绘制前调用函数,间隔时间是由浏览器自身决定的，动画效果不会抖动
//     2.高频率触发的事件里，会多次被触发，如滚动，触摸，设置标识，保证 requestAnimationFrame队列里，相同的函数只用一个
//     就不会重复绘制
//     3.requestAnimationFrame 会把每一帧的Dom操作集中起来，等到下一回流重绘时一起完成，
//     并且回流和重绘的时间频率保持和浏览器一致
//     4.requestAnimationFrame默认返回一个ID
//     5.可以取消绘制 cancelAnimationFrame(ID)
//     6.一般采用的方式就是递归调用
// }