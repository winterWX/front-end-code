
/**  resolve 传入参数是 Promise 的情况 */


const parentPromise = new Promise((resolve,reject)=>{
    //resolve('aaaa')
    reject('bbbb')
})

new Promise((resolve,reject)=>{
    resolve(parentPromise)
}).then((res)=>{
   /**
    *  此时 res 是由 parentPromise 的 resolve 决定的
    * 
   */
    console.log('res===',res)
},(err)=>{
    /**
    *  此时 res 是由 parentPromise 的 resolve 决定的
    * 
   */
    console.log('err===',err)
})
