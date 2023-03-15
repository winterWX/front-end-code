/**
 * 
 *   Promise 是一个类
 *   Promise 接收一个立即执行函数 executor, executor接收两个回调函数 resolve,reject
 *   Promise 会返回一个类对象，类对像上会有相应的函数
 *   Promise 有三种状态 pending, fulfilled rejected, 而且状态是不可逆的
 * 
 */

const newPromise = new Promise(/*executor 立即函数*/(resolve,reject)=>{
    /**
     *  此阶段是 executor立即执行阶段，也是同步执行阶段
     *  此阶段的状态是 pending 
    */
    resolve('成功的函数')
    reject('失败的函数')
})

newPromise.then(/*resolve 回调函数*/(res)=>{
    //成功的回调
    //此时状态时 fulfilled

},/*reject 回调函数*/(err)=>{

    //失败的回调
    //此时的阶段是 rejected
})