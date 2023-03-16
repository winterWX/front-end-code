/*** Promise里 catch 的基本使用 */

let newPromise = new Promise((resolve,reject)=>{
    //reject()
    resolve('00')
})

// 连续多次调用
newPromise.catch(err=>{
    console.log('catch 的基本使用-fail ------ 2',err) 

    //return new Promise((resolve,reject)=>{ reject('then 里的异常') })
    // return 对象时 ----- return new Promise((resolve,reject)=>{ reject(对象) })
    return {
        name:'wx',
        then: function(resolve,reject){
            reject(this.name)
        }
    }
}).then(res1=>{
    console.log('res1==== success',res1)
}).catch(err2=>{
    console.log('res1==== fail',res1)
})
