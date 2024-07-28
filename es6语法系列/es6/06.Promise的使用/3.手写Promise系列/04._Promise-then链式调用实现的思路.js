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
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        if(this.status === 'STATUS_FULFILLED'){
            onFulfilled(this.value)
        }
        if(this.status === 'STATUS_REJECTED'){
            onRejected(this.reason)
        }
        if(this.status === 'STATUS_PENDING'){
            this.onFulfilled.push(onFulfilled)
            this.onRejected.push(onRejected)
        }

        // 默认的返回值  return undefined

        // 我们要做的 就是返回一个新的Promise

        /**
         * 
         *   ---------------- 需要实现的代码
         * 
         */
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

/**
 *  能链式调用就说明上面的 代码会有一个Promise的返回值
 * 
 *  如：promise = testPromise.then(res=>{
 *         console.log('res:==',res)
 *      },err=>{
 *         console.log('err:==',err)
 *     })
 *    
 *   没有返回值，说明上面默认返回的undefined
 * 
 * 
 *   此时我们要做的就是要给它一个返回值，返回一个新的Promise
 */



