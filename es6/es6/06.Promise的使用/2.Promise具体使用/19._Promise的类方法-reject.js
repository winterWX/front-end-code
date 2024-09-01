

Promise.reject('aaaa')

// 等价于

new Promise((resolve,reject)=>{
    reject('aaaa')
})