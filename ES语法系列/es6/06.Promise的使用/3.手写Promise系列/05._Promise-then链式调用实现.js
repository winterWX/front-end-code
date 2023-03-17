/**  .then 链式调用 的实现思路 **/

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
                // 捕获异常，执行reject
                try{
                    let result = onFulfilled(this.value)  // 先执行上一次的 onFulfilled，有返回值了就返回出来
                    resolve(result)
                }catch(error) {
                    reject(error)
                }
            }
            if(this.status === 'STATUS_REJECTED'){
                // 捕获异常，执行reject
                try {
                    let reason = onRejected(this.reason)  // 先执行上一次的 onRejected，有返回值了就返回出来
                    resolve(reason)   //catch 有返回值是也是执行 resolve
                } catch (error) {
                    reject(error)
                }
            }
            if(this.status === 'STATUS_PENDING'){
                // 数组里拿返回值
                this.onFulfilled(()=>{
                    try {
                        let result = onFulfilled(this.value) // 此时遍历的就是 ()=>{onFulfilled(this.value)}
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                })
                this.onRejected.push(()=>{
                    try {
                        let reason = onRejected(this.reason)
                        resolve(reason)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
        })
    }
}

const testPromise = new wxPromise((resolve,reject)=>{
    //resolve('111')
    //reject('222')
    throw new Error('executor message')
})

testPromise.then(res=>{
    console.log('res:==',res)
    return 'aaaa'
},err=>{
    console.log('err:==',err)
    return 'bbbb'
}).then(res2=>{
    console.log('res2:==',res2)
},err2=>{
    console.log('err2:==',err2)
})




