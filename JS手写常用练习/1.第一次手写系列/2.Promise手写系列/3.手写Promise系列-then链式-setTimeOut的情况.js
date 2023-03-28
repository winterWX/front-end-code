class wxPromise{
    constructor(executor){
        this.status = 'STATUS_PENDING'
        this.onFulfilledArr = []
        this.onRejectedArr = []
        this.values = undefined
        this.reason = undefined
        let resolve = (value)=>{
            if(this.status === 'STATUS_PENDING'){
                this.status = 'STATUS_FULFILLED'
                this.values = value
                queueMicrotask(()=>{
                    this.onFulfilledArr.forEach(fn=>{
                        fn()
                    })
                })
            }
        }
        let reject = (reason)=>{
            if(this.status === 'STATUS_PENDING'){
                this.status = 'STATUS_REJECTED'
                this.reason = reason
                queueMicrotask(()=>{
                    this.onRejectedArr.forEach(fn=>{
                        fn()
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
        onRejected = onRejected || (err=>{ throw err}) //等于我补了一个函数，err 照样是我的this.reason, 只是我当作错误抛出去了
        onFulfilled = onFulfilled || (val=>{ return val})
        return new wxPromise((resolve,reject)=>{
            if(this.status === 'STATUS_FULFILLED'){
                executorEnhance(onFulfilled,this.values,resolve,reject)
            }
            if(this.status === 'STATUS_REJECTED'){
                executorEnhance(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'STATUS_PENDING'){
                onFulfilled && this.onFulfilledArr.push(()=>{
                    executorEnhance(onFulfilled,this.values,resolve,reject)
                })
                onFulfilled && this.onRejectedArr.push(()=>{
                    executorEnhance(onRejected,this.reason,resolve,reject)
                })
            }
        })
    }
    catch(onRejected){
        return this.then(null,onRejected)
    }
    finally(onFinally){
        this.then(onFinally,onFinally)
    }
    static resolve(val){
        new wxPromise((resolve,reject)=>{
            resolve(val)
        })
    }
    static reject(val){
        new wxPromise((resolve,reject)=>{
            reject(val)
        })
    }
    static all(arr){
        if(Array.isArray(arr)){
            return new wxPromise((resolve,reject)=>{
                let values = []
                arr.forEach(promiseFn=>{
                    promiseFn.then(res=>{
                        values.push(res)
                        if(values.length === arr.length){
                            resolve(values)
                        }
                    },err=>{
                        reject(err)
                    })
                })
            })
        }
    }
    static allSettled(arr){
        if(Array.isArray(arr)){
            return new wxPromise((resolve, reject) => {
                let values = []
                arr.length > 0 && arr.forEach(promiseFn=>{
                    promiseFn.then(res=>{
                        values.push({status: 'fulfilled',value: res})
                        values.length === arr.length && resolve(values)
                    },err=>{
                        values.push({status: 'rejected',value: err})
                        values.length === arr.length && resolve(values)
                    })
                })
            })
        }
    }
    static any(arr){
        if(Array.isArray(arr)){
            return new wxPromise((resolve,reject)=>{
                let values = []
                arr.length > 0 && arr.forEach(promiseFn=>{
                    promiseFn.then(res=>{
                        resolve(res)
                    },err=>{
                        values.push(err)
                        arr.length === values.length && reject(values)
                    })
                })
            })
        }
    }
}

function executorEnhance(executorFn,value,resolve,reject){
    try {
        let result = executorFn(value)   // 查看是否有返回值， 当有返回值将返回值再resolve 到下一层
        resolve(result)
    } catch (error) {
        reject(error)
    }
}

// const ppp = new wxPromise((resolve,reject)=>{
//     //resolve('aaaaa')
//         reject('bbb')
//     //throw new Error('executor message')
// })

// ppp.then(res=>{
//     console.log('res====',res)
//     return ',,,'
// }).catch(err1=>{
//     console.log('err1====',err1)
// }).finally(()=>{
//     console.log('finally============')
// })



const p1 = new wxPromise((resolve, reject) => {
    setTimeout(()=>{
        reject('1111')
    },1000)
})

const p2 = new wxPromise((resolve, reject) => {
    setTimeout(()=>{
        reject('2222')
    },1000)
})

const p3 = new wxPromise((resolve, reject) => {
    setTimeout(()=>{
        reject('3333')
    },1000)
})

wxPromise.any([p1,p2,p3]).then(res=>{
    console.log('res',res)
},err=>{
    console.log('err',err)
}) 
