/**  .catch 的实现思路 **/

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
                onFulfilled && executorTryCatch(onFulfilled,this.value,resolve,reject)
            }
            if(this.status === 'STATUS_REJECTED'){
                onRejected && executorTryCatch(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'STATUS_PENDING'){
                // 数组里拿返回值
                onFulfilled &&  this.onFulfilled(()=>{
                    executorTryCatch(onFulfilled,this.value,resolve,reject)
                })
                onRejected &&  this.onRejected.push(()=>{
                    executorTryCatch(onRejected,this.reason,resolve,reject)
                })
            }
        })
    }
    catch(onRejected){
        /**
         *  1. catch 是将 .then里的第二个reject回调方法交给了.catch来处理。就等于.catch是帮then处理reject回调方法
         *  等价于 this.then(undefined,onRejected)
         * 
         *  2. 思考： const promise1 = new Promise((resolve,reject)=>{})
         *     
         *     1> promise1.then(res=>{},undefined)
         *     2> promise1.then(res=>{},undefined).catch 是相当于 在promise1.then(res=>{},undefined) 重新返回的新的promise2上.catch
         *     promise2.catch(err=>{})
         * 
         *  参考.then的链式调用 ---- 难点
         * 
         *  当.then里第二个回调函数是undefined时，给它重新赋值一个 抛出错误的方法，
         *  这样就会走到.catch里了。.catch就是二次.then,.catch回调的函数就是，二次.then的reject回调的函数
         *   
         * 
         */
        this.then(undefined,onRejected)
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
}).catch(err=>{
    console.log('catch====',err)
})




