/**
 *  then return 其他类型的数据  <return 一个Promise  和  return thenable>
*/
 
const testObj = {
    name:'wx',
    then: function(resolve,reject){
        resolve(this.name)
    }
}

const testPromise = new Promise((resolve,reject)=>{
    resolve('return 一个Promise')
})


const newPromise = new Promise((resolve,reject)=>{
    resolve('aaaa')
})

// 第一个.then里 return 一个对象
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
     *  return testObj
     *  
     *  默认就会操作成 return new Promise((resolve,reject)=>{
     *       resolve(testObj)
     *  })
     * 
     * 
    */

    return testObj
})/** 这里的.then 拿到的值是由 testObj 对象里then方法里的 resolve 决定的 */ .then(res=>{
    console.log("then 里 return 的结果",res)
})


// 第一个.then里 return 一个Promise
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
     *  return testPromise
     *  
     *  默认就会操作成 return new Promise((resolve,reject)=>{
     *       resolve(testPromise)
     *  })
     * 
     * 
    */

    return testPromise
})
/** 
   这里的.then 拿到的值是 testPromise里 resolve 的值,最后又将这个resolve里的值交给了外层的resolve. 
   外层的resolve 再将值抛给了第二个.then()
*/ .then(res=>{
    console.log("then 里 return 的结果",res)
}) /*** 可以一直.then, 下一个.then拿的是上一个.then的返回值 */.then(last =>{

})