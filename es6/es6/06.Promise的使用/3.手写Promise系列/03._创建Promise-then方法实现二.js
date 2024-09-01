/**  .then 的多次调用  和 延迟调用.then  */

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
            
            /**
             * 1. 因为首次执行时，按照同步代码执行顺序还没有执行到.then,就已经调用了.then里的赋值方法，导致调用了未定义的方法
             * 所以使用queueMicrotask将代码放到微任务队列，等同步代码执行完后，立即再执行微任务里的代码，此时就可以拿到赋值的方法了
            */
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
            /**
             * 因为首次执行时，按照同步代码执行顺序还没有执行到.then,就已经调用了.then里的赋值方法，导致调用了未定义的方法
             * 所以使用queueMicrotask将代码放到微任务队列，等同步代码执行完后，立即再执行微任务里的代码，此时就可以拿到赋值的方法了
            */
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
        
        // 状态已经确认了，说明是延迟调用的.then, 上面的状态对应的数组已经遍历结束了。所以直接调用就可以了
        if(this.status === 'STATUS_FULFILLED'){
            onFulfilled(this.value)
        }
        if(this.status === 'STATUS_REJECTED'){
            onRejected(this.reason)
        }
        
        //多个.then 调用在没有确定状态时，先加到数组里，等确定状态了，根据状态执行对应的状态数组
        if(this.status === 'STATUS_PENDING'){
            this.onFulfilled.push(onFulfilled)
            this.onRejected.push(onRejected)
        }
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

testPromise.then(res=>{    /** 多次.then调用 后面依次会覆盖前面一次，此时要将回调函数保存在数组里 */
    console.log('res1:==',res)
},err=>{
    console.log('err1:==',err)
})

setTimeout(()=>{
    testPromise.then(res=>{    /** .then延迟调用，没有加到状态数组里 */
        console.log('res3:==',res)
    },err=>{
        console.log('err4:==',err)
    })
},1000)

setTimeout(()=>{
    testPromise.then(res=>{    /** .then延迟调用，没有加到状态数组里 */
        console.log('res-last:==',res)
    },err=>{
        console.log('err-last:==',err)
    })
},2000)



