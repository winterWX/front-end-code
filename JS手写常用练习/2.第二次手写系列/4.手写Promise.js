const statusArray = {
    pending: 'PENDING',
    resolve: 'FULFILLED',
    reject: 'REJECTED'
}
class wxPromise{
    constructor(executor){
       this.status = statusArray['pending']
       this.onFulfilledArr = []
       this.onRejectedArr = []
       this.values = null
       this.reason = null
       let resolve = (value)=>{
          if(this.status === 'PENDING'){
            this.status = statusArray['resolve']
            this.values = value
            queueMicrotask(()=>{
                this.onFulfilledArr.forEach(fn=>{
                    fn(this.values)
                })
            })
          }
       }
       let reject =(reason)=>{
          if(this.status === 'PENDING'){
            this.status = statusArray['reject']
            this.reason = reason
            queueMicrotask(()=>{
                this.onRejectedArr.forEach(fn=>{
                    fn(this.reason)
                })
            })
          }
       }
       executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        onRejected = onRejected || (err=>{ throw err})
        onFulfilled = onFulfilled || (val=>{ return val }) 
        return new wxPromise((resolve,reject)=>{
            if(this.status === 'FULFILLED'){
                executorEnhance(onFulfilled,this.values,resolve,reject)
            }
            if(this.status === 'REJECTED'){
                executorEnhance(onRejected,this.reason,resolve,reject)
            }
            if(this.status === 'PENDING'){
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
        if(Array.isArray(promises)){
            return new wxPromise((resolve,reject)=>{
                let values = []
                promises.forEach(promiseFn=>{
                    promiseFn.then(res=>{
                        values.push(res)
                        if(values.length === promises.length){
                            resolve(values)
                        }
                    },err=>{
                        reject(err)
                    })
                })
            })
        }
    }
    static allSettled(promises){
        return new wxPromise((resolve,reject)=>{
            let values =[]
            promises.forEach(promiseFn=>{
                promiseFn.then(res=>{
                    values.push({status: 'fulfilled',value: res})
                    if(promises.length === values.length){ resolve(values) }
                },err=>{
                    values.push({status: 'rejected',reason: err})
                    if(promises.length === values.length){ resolve(values) }
                })
            })
        })
    }
    static any(promises){
        return new wxPromise((resolve,reject)=>{
            let reasons = []
            promises.forEach(promiseFn=>{
                promiseFn.then(res=>{
                    resolve(res)
                },err=>{
                    reasons.push(err)
                    if(reasons.length === promises.length){
                        reject(reasons)
                    }
                })
            })
        })
    }
}

function executorEnhance(onCallback,values,resolve,reject){
    try {
        let result = onCallback(values)
        resolve(result)
    } catch (error) {
        reject(error)
    }
}

const testPromise = new wxPromise((resolve,reject)=>{
    resolve('aaa')
    //reject('bbb')
})
// testPromise.then(res=>{
//     console.log('res====',res)
// },err=>{
//     console.log('err====',err)
// }).then(res1=>{
//     console.log('res1====',res1)
// },err1=>{
//     console.log('err1====',err1)
// })


// setTimeout(()=>{
//     testPromise.then(res=>{
//         console.log('res-setTimeout',res)
//         return '66'
//     },err=>{
//         console.log('err=setTimeout',err)
//     }).then(res2=>{
//         console.log('res-setTimeout2',res2)
//     },err2=>{
//         console.log('err====setTimeout2',err2)
//     })
// },2000)


testPromise.then(res=>{
   console.log("res===",res)
   return '00'
}).catch(err=>{
    console.log("err===",err)
}).finally(res44=>{
    // then 和 catch 时都会调 finally 没有值，做一些清除性的处理
})