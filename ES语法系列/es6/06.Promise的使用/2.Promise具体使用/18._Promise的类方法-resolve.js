

Promise.resolve('aaaa')

// 等价于

new Promise((resolve,reject)=>{
    resolve('aaaa')
})