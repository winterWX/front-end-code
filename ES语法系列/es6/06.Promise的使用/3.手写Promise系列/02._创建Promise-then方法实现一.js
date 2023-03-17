/**  .then 的基本调用  */

class wxPromise{
    constructor(/*立即回调函数*/executor){
        // 定义Promise的三种状态
        const statusArray = {
            pending: 'STATUS_PENDING',
            fulfilled: 'STATUS_FULFILLED',
            rejected: 'STATUS_REJECTED'
        }
        this.onFulfilled = null
        this.onRejected = null
        this.status = statusArray.pending   // 最初始的状态

        // 创建回调函数
        const resolve = (value)=>{ 
            
            /**
             * 1. 因为首次执行时，按照同步代码执行顺序还没有执行到.then,就已经调用了.then里的赋值方法，导致调用了未定义的方法
             * 所以使用queueMicrotask将代码放到微任务队列，等同步代码执行完后，立即再执行微任务里的代码，此时就可以拿到赋值的方法了
             */
            if(this.status === statusArray.pending){
                this.status = statusArray.fulfilled  // 确定唯一的状态， 要么是 fulfilled 要么是rejected,只能唯一
                queueMicrotask(()=>{
                    this.onFulfilled(value)
                })
            }
        }
        const reject = (reason)=>{
            /**
             * 因为首次执行时，按照同步代码执行顺序还没有执行到.then,就已经调用了.then里的赋值方法，导致调用了未定义的方法
             * 所以使用queueMicrotask将代码放到微任务队列，等同步代码执行完后，立即再执行微任务里的代码，此时就可以拿到赋值的方法了
            */
            if(this.status === statusArray.pending){
                this.status = statusArray.rejected  // 确定唯一的状态， 要么是 fulfilled 要么是rejected,只能唯一
                queueMicrotask(()=>{
                    this.onRejected(reason)
                })
            }

        }
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        this.onFulfilled = onFulfilled
        this.onRejected = onRejected
    }
}

const testPromise = new wxPromise((resolve,reject)=>{
    resolve('111')
    //reject('222')
})

testPromise.then(res=>{
    console.log('res:==',res)
},err=>{
    console.log('err:==',err)
})



