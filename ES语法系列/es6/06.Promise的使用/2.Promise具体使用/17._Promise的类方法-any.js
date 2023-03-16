/**
 * 
 *  Promise, any方法
 * 
 *  多个promise调用，至少要等一个状态是fulfilled, 以最先成功的 fulfilled 的结果返回给.then, 等到了就不会再执行后面的Promise
 *  如果全部是rejected状态 就会走到.catch里
 * 
 */

const  p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('我是p的resolve')
        reject('我是p的reject')
    },3000)
})
const  p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('我是p1的resolve')
        reject('我是p1的reject')
    },1000)
})
const  p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('我是p2的resolve')
        reject('我是p2的reject')
    },2000)
})

Promise.any([p,p1,p2]).then(res=>{
    console.log('res====',res)
}).catch(err=>{
    console.log('err====',err)
})