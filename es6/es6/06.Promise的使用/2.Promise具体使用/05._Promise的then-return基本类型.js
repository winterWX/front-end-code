/**
 *  .then() 的使用方法二
*/
 
const newPromise = new Promise((resolve,reject)=>{
    resolve('aaaa')
})

newPromise.then(res=>{
    console.log('res==',res)  // resolve 时就会走到then里
    /**
     *  1.then里默认时有返回值的
     *  什么不写时默认返回值时  return undefined
     *  
     *  2.当有返回值时
     *  会重新new 一个Promise,将返回的内容包裹在Promise里resolve里
     * 
     *  例如：
     *  return 'aaaa'
     *  
     *  默认就会操作成 return new Promise((resolve,reject)=>{
     *       resolve('aaaa')
     *  })
     * 
     * 
    */

    return '2222'
})/** 这里的.then 就会拿到 return 的内容 */ .then(res=>{
    console.log("then 里 return 的结果",res)
})