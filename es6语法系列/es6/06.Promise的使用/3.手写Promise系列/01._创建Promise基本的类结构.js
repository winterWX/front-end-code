/**  创建基本的类结构  */

class wxPromise{
    constructor(/*立即回调函数*/executor){
        // 定义Promise的三种状态
        const statusArray = {
            pending: 'STATUS_PENDING',
            fulfilled: 'STATUS_FULFILLED',
            rejected: 'STATUS_REJECTED'
        }
        this.status = statusArray.pending   // 最初始的状态

        // 创建回调函数
        const resolve = ()=>{
            console.log('resolve')
        }
        const reject = ()=>{
            console.log('reject')
        }
        executor(resolve,reject)
    }
}

new wxPromise((resolve,reject)=>{
    resolve()
})