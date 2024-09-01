/*** Promise里 catch 的基本使用 */

let newPromise = new Promise((resolve,reject)=>{
    reject('aaa')
    //resolve('00')
})

// 连续多次调用
newPromise.then(res=>{
    console.log('then 的基本使用-success ------',res) 
}).catch(err=>{
    console.log('catch 的基本使用-fail ------',err) 
    
    return 'bbbb'
}).then(res=>{
    console.log('res=====',res)
})
