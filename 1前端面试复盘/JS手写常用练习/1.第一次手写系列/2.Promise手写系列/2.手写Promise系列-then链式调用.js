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
                queueMicrotask(()=>{
                    this.values = value
                    this.onFulfilledArr.forEach(fn=>{
                        fn()
                    })
                })
            }
        }
        let reject = (reason)=>{
            if(this.status === 'STATUS_PENDING'){
                this.status = 'STATUS_REJECTED'
                queueMicrotask(()=>{
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
    then(onFulfilled, onRejected){
        return new wxPromise((resolve,reject)=>{
            onFulfilled && this.onFulfilledArr.push(()=>{
                let value = onFulfilled(this.values)   // 查看是否有返回值， 当有返回值将返回值再resolve 到下一层
                resolve(value)
            })
            onFulfilled && this.onRejectedArr.push(()=>{
                let reason = onFulfilled(this.reason)   // 查看是否有返回值， 当有返回值将返回值再resolve 到下一层
                resolve(reason)
            })
        })
    }
    catch(onRejected){

    }
}

new wxPromise((resolve,reject)=>{
    //resolve('aaaaa')
    reject('bbb')
    //throw new Error('executor message')
}).then(res=>{
    console.log('res====',res)
},err=>{
    console.log('err====',err)
}).then(res1=>{
    console.log('res1====',res1)
},err1=>{
    console.log('err1====',err1)
}).then(res2=>{
    console.log('res2====',res2)
},err2=>{
    console.log('err2====',err2)
})