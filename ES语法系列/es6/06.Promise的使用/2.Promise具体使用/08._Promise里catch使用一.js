/*** Promise里 catch 的基本使用 */

let newPromise = new Promise((resolve,reject)=>{
    //reject()
    resolve('00')
})

// 连续多次调用
newPromise.then(res=>{
    return new Promise((resolve,reject)=>{
        reject('then 里的异常')
    })
})

/** 
 *  这里 .catch的特殊点
 *  
 *  优先会捕获 newPromise 里executor里异常，
 *  如果 ewPromise 里executor里 没有异常
 *  就会捕获.then里的异常 
 * 
 */

.catch(err=>{
    console.log('catch 的基本使用-fail ------ 2',err)  
})
