/**  
 * 
 *  .then的链式调用
 *  
*/

class wxPromise{
    constructor(/*立即回调函数*/executor){
        // 定义Promise的三种状态
        const statusArray = {
            pending: 'STATUS_PENDING',
            fulfilled: 'STATUS_FULFILLED',
            rejected: 'STATUS_REJECTED'
        }
        this.status = statusArray.pending
        this.value = null
        this.reason = null

        // 创建回调函数
        const resolve = (value)=>{
            // 改变 Promise 的状态
            if(this.status === statusArray.pending){ 
                this.status = statusArray.fulfilled
                this.value = value
            }
        }
        const reject = (reason)=>{
            // 改变 Promise 的状态
            if(this.status === statusArray.pending){ 
                this.status = statusArray.rejected
                this.reason = reason
            }
        }
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        if(!!onFulfilled && this.status === 'STATUS_FULFILLED'){
            onFulfilled(this.value)
        }
        if(!!onRejected && this.status === 'STATUS_REJECTED'){
            onRejected(this.reason)
        }
    }
}


const wxPromiseObject = new wxPromise((resolve,reject)=>{
    resolve('1111')
    //reject('2222')
})

wxPromiseObject.then(res=>{
   console.log('res====',res)
},err=>{
    console.log('err====',err)
})

wxPromiseObject.then(res1=>{
    console.log('res1====',res1)
},null)


setTimeout(()=>{
    wxPromiseObject.then(res3=>{
        console.log('res3====',res3)
    },null)
},1000)