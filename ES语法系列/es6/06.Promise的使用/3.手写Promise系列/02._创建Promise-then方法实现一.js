/**  
 * 
 * 实现简单的then 调用
 * 
 *  此时还存在问题 
 *   
 *  resolve
 *  和reject 重复调用时会覆盖
 *  this.status的状态被最后一个 reject 函数给篡改了，导致只走了 onRejected回调
 * 
 * 
*/

class wxPromise{
    constructor(/*立即回调函数*/executor){
        // 定义Promise的三种状态
        const statusArray = {
            pending: 'STATUS_PENDING',
            fulfilled: 'STATUS_FULFILLED',
            rejected: 'STATUS_REJECTED'
        }
        this.status = statusArray.pending   // 最开始的状态
        //  resolve 和 reject时传递的值保存在对象上, 这样调用this时好传递 
        this.value = null
        this.reason = null

        // 创建回调函数
        const resolve = (value)=>{
            // 改变 Promise 的状态
            this.status = statusArray.fulfilled
            this.value = value
        }
        const reject = (reason)=>{
            // 改变 Promise 的状态
            this.status = statusArray.rejected
            this.reason = reason
        }
        executor(resolve,reject)
    }
    // then 里面接收两个回调函数，一个是成功回调，一个是失败的回调。将this.value 和 this.reason 传给对应的回调函数
    then(onFulfilled,onRejected){
        console.log('this.status=======',this.status)
        if(this.status === 'STATUS_FULFILLED'){
            onFulfilled(this.value)
        }
        if(this.status === 'STATUS_REJECTED'){
            onRejected(this.reason)
        }
    }
}

new wxPromise((resolve,reject)=>{
    /**
     *  此时重复调用 会有问题
     *  reject会覆盖 resolve
     *  
     *  this.status的状态被最后一个 reject 函数给篡改了
     *  
     * 
     *  规范Promise 只是执行 最前面的一个方法 
     * 
     *  下节进一步优化 
     *
     */
    resolve('1111')
    reject('2222')
}).then(res=>{
    console.log('res=====',res)
},(err)=>{
    console.log('err=====',err)
})