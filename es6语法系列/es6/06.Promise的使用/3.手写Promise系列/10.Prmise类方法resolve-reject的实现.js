/**  .finally 的实现思路 **/

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
        onRejected = onRejected || ((err)=>{ throw err})
        // 调finally时，由于上面.catch的第一个参数传的是undefined,
        //所以必须判断 onFulfilled 函数是否有值，没有值，就 return出去,下一个 Promise会处理
        onFulfilled = onFulfilled || (val=> { return val })

        return new wxPromise((resolve,reject)=>{
            if(this.status === 'STATUS_FULFILLED'){
                onFulfilled && executorTryCatch(onFulfilled,this.value,resolve,reject)
            }
            if(this.status === 'STATUS_REJECTED'){
                onRejected && executorTryCatch(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'STATUS_PENDING'){
                // 数组里拿返回值
                onFulfilled && this.onFulfilled(()=>{
                    executorTryCatch(onFulfilled,this.value,resolve,reject)
                })
                onRejected && this.onRejected.push(()=>{
                    executorTryCatch(onRejected,this.reason,resolve,reject)
                })
            }
        })
    }
    catch(onRejected){
        return this.then(undefined,onRejected)
    }
    finally(onFinally){
        this.then(onFinally,onFinally) 
    }
    static resolve(value){
        return new wxPromise((resolve,reject)=>{
            resolve(value)
        })
    }
    static reject(reason){
        return new wxPromise((resolve,reject)=>{
            reject(reason)
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
// const testPromise = new wxPromise((resolve,reject)=>{
//     //resolve('111')
//     //reject('222')
//     //throw new Error('executor message')
// })

const p = wxPromise.resolve('mmmm')
const p1 = wxPromise.reject('nnnn')
p.then(res=>{
    console.log('res=====',res)
})
p1.catch(err=>{
    console.log('err =====',err)
})



