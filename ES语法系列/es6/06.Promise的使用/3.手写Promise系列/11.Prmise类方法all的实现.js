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
                        fn(this.value)
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
                        fn(this.reason)
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
    static all(promises){
        // all 只要等到有一个失败，那么结果就是失败，没有失败的，就会将所有的结果放到数组里
        return new wxPromise((resolve,reject)=>{
            let values = []
            promises.length > 0 && promises.forEach(promise=>{
                promise.then(res=>{
                   values.push(res) // 收集所用的结果
                   if(values.length === promises.length){
                    resolve(values)
                   }
                },err=>{
                    reject(err)
                })
            })
        })
    }

    static allSettled(promises){
        return new wxPromise((resolve,reject)=>{
            let values = []
            promises.forEach(promise=>{
                promise.then(res=>{
                    values.push({status: 'fulfilled',value: res})
                    if(values.length === promise.length){
                        resolve(values)
                    }
                },err=>{
                    values.push({status: 'rejected',reason: err})
                    if(values.length === promise.length){
                        resolve(values)
                    }
                })
            })
        })
    }
    static race(promiseArr){
        return new wxPromise((resolve,reject)=>{
            promiseArr.forEach(item=>{
                item.then(res=>{
                    resolve(res)
                },err=>{
                    reject(err)
                })
            })
        })
    }
    static any(promiseArr){
        return new wxPromise((resolve,reject)=>{
            let reason = []
            promiseArr.forEach(item=>{
                item.then(res=>{
                    resolve(res)
                },err=>{
                    reason.push(err)
                    if(reason.length === promiseArr.length){
                        reject(reason)
                    }
                })
            })
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

const p = new wxPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1111')
    },1000)
})

const p1 = new wxPromise((resolve,reject)=>{
    //setTimeout(()=>{
        reject('2222')
    //},2000)
})

const p2 = new wxPromise((resolve,reject)=>{
    //setTimeout(()=>{
        resolve('3333')
    //},3000)
})

wxPromise.allSettled([p,p1,p2]).then(res=>{
    console.log('res====',res)
})



