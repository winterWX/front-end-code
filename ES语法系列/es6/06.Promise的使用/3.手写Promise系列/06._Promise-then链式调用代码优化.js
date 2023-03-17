/**  .then 链式调用 的实现思路 **/

class wxPromise{
    constructor(/*立即回调函数*/executor){
        // 定义Promise的三种状态
        const statusArray = {
            pending: 'STATUS_PENDING',
            fulfilled: 'STATUS_FULFILLED',
            rejected: 'STATUS_REJECTED'
        }
        this.value = null
        this.reason = null
        this.onFulfilled = []
        this.onRejected = []
        this.status = statusArray.pending   // 最初始的状态

        // 创建回调函数
        const resolve = (value)=>{ 
            if(this.status === statusArray.pending){
                this.status = statusArray.fulfilled  // 确定唯一的状态， 要么是 fulfilled 要么是rejected,只能唯一
                this.value = value
                queueMicrotask(()=>{
                    this.onFulfilled.forEach(fn=>{
                        fn(value)
                    })
                })
            }
        }
        const reject = (reason)=>{
            if(this.status === statusArray.pending){
                this.status = statusArray.rejected  // 确定唯一的状态， 要么是 fulfilled 要么是rejected,只能唯一
                this.reason = reason
                queueMicrotask(()=>{
                    this.onRejected.forEach(fn=>{
                        fn(reason)
                    })
                })
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled,onRejected){
        return new wxPromise((resolve,reject)=>{
            if(this.status === 'STATUS_FULFILLED'){
                executorTryCatch(onFulfilled,this.value,resolve,reject)
            }
            if(this.status === 'STATUS_REJECTED'){
                executorTryCatch(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'STATUS_PENDING'){
                // 数组里拿返回值
                this.onFulfilled(()=>{
                    executorTryCatch(onFulfilled,this.value,resolve,reject)
                })
                this.onRejected.push(()=>{
                    executorTryCatch(onRejected,this.reason,resolve,reject)
                })
            }
        })
    }
}
// 捕获异常代码 - 封装
function executorTryCatch (executorFn, arg, resolve,reject) {
    try {
        let result = executorFn(arg)
        resolve(result)
    } catch (error) {
        reject(error)
    }
}
const testPromise = new wxPromise((resolve,reject)=>{
    //resolve('111')
    reject('222')
    //throw new Error('executor message')
})

testPromise.then(res=>{
    console.log('res:==',res)
    return 'aaaa'
},err=>{
    console.log('err:==',err)
    // return 'bbbb'
    throw new Error('11111111')
}).then(res2=>{
    console.log('res2:==',res2)
},err2=>{
    console.log('err2:==',err2)
})




