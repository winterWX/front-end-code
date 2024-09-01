class childPromise{
    constructor(executor){
        this.statusArr = {
            pending: 'STATUES_PENDING',
            fulfilled: 'STATUES_FULFILLED',
            rejected: 'STATUS_REJECTED'            
        }
        this.status = 'STATUES_PENDING'
        this.values = undefined
        this.reason = undefined
        this.onFulfilledArr = []
        this.onRejectedArr = []
        const resolve = (value)=>{
            if(this.status === 'STATUES_PENDING'){
                queueMicrotask(()=>{
                    if(this.status !== 'STATUES_PENDING') return
                    this.status = 'STATUES_FULFILLED'
                    this.values = value
                    this.onFulfilledArr.forEach(fn=>{
                        fn(this.values)
                    })
                })
            }
        }
        const reject = (reason)=>{
            if(this.status === 'STATUES_PENDING'){ 
                queueMicrotask(()=>{
                    if(this.status !== 'STATUES_PENDING') return
                    this.status = 'STATUS_REJECTED'
                    this.reason = reason
                    this.onRejectedArr.forEach(fn=>{
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
        onRejected = onRejected || (err=> { throw err })
        onFulfilled = onFulfilled || (value=> { return value})  // .catch 断层处理
        return new childPromise((resolve,reject)=>{
            //如果状态已经确定了就直接执行
            if(this.status === 'STATUES_FULFILLED' && onFulfilled){
                executorEnhance(onFulfilled,this.values,resolve,reject)
            }
            if(this.status === 'STATUS_REJECTED' && onRejected){
                executorEnhance(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'STATUES_PENDING'){
                // 多次调用，将成功回调和失败的回调放到数组里，遍历调用
                onFulfilled && this.onFulfilledArr.push(()=>{
                    executorEnhance(onFulfilled,this.values,resolve,reject)
                })
                onRejected && this.onRejectedArr.push(()=>{
                    executorEnhance(onRejected,this.reason,resolve,reject)
                })
            }
        })
    }
    catch(onRejected){
        return this.then(undefined, onRejected)
    }
    finally(onFinally){
        this.then(onFinally,onFinally)
    }
    static resolve(value){
        return new childPromise((resolve,reject)=>{
            resolve(value)
        })
    }
    static reject(reason){
        return new childPromise((resolve,reject)=>{
            reject(reason)
        })
    }
    static all(promises){
        // all 只要等到有一个失败，那么结果就是失败，没有失败的，就会将所有的结果放到数组里
        return new childPromise((resolve,reject)=>{
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
        return new childPromise((resolve,reject)=>{
            let values = []
            promises.forEach(promise=>{
                promise.then(res=>{
                    values.push({status: 'fulfilled',value: res})
                    if(values.length === promises.length){
                        resolve(values)
                    }
                },err=>{
                    values.push({status: 'rejected',reason: err})
                    if(values.length === promises.length){
                        resolve(values)
                    }
                })
            })
        })
    }
    static race(promiseArr){
        return new childPromise((resolve,reject)=>{
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
        return new childPromise((resolve,reject)=>{
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

function executorEnhance(callBackFn, value, resolve,reject){
    try {
        let result = callBackFn(value)
        resolve(result)
    } catch (error) {
        reject(error)
    }
}

const child = new childPromise((resolve,reject)=>{
    //resolve('resolve')
    reject('reject')
    //throw new Error('executor message')
})

// child.then(res=>{
//     console.log('res:===',res)
//     return 'aaaa'
//     //throw new Error('err==err')
// }).catch(err=>{
//     console.log('err',err)
// }).finally(()=>{
//     console.log('finally----')
// })



const p = new childPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1111')
    },1000)
})

const p1 = new childPromise((resolve,reject)=>{
    setTimeout(()=>{
        reject('2222')
    },2000)
})

const p2 = new childPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('3333')
    },3000)
})

childPromise.all([p,p1,p2]).then(res=>{
    console.log('res====',res)
}).catch(err=>{
    console.log('err====',err)
})