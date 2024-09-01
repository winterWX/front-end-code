/*** Promise里 catch 的基本使用 */

const newPromise = new Promise((resolve,reject)=>{
    
    // 都会走到 .catch里
    reject('catch 的基本使用')
    //throw new Error('catch 的基本使用')
})

// 连续多次调用
newPromise.catch(err=>{
    console.log('catch 的基本使用-fail',err)  //catch 的基本使用
})

newPromise.catch(err=>{
    console.log('catch 的基本使用-fail',err) //catch 的基本使用
})
