class wxPromise{
    constructor(executor){
        this.status = 'STATUS_PENDING'
        let resolve = (value)=>{
            if(this.status === 'STATUS_PENDING'){
                this.status = 'STATUS_FULFILLED'
                queueMicrotask(()=>{
                    console.log('value===',value)
                    this.onFulfilled(value);
                })
            }
        }
        let reject = (reason)=>{
            if(this.status === 'STATUS_PENDING'){
                this.status = 'STATUS_REJECTED'
                queueMicrotask(()=>{
                    console.log('reason===',reason)
                    this.onRejected(reason);
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
        this.onFulfilled = onFulfilled
        this.onRejected = onRejected
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
})