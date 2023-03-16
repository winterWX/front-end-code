/**
 * 
 *  Promise, race方法
 * 
 *  多个promise调用，不管是resolve还是reject,以最快那个结果为准,
 *  当最快的Promise有状态了，如果状态时fulfilled就会走到.then里，如果状态是rejected 就会走到.catch里
 *  其他的Promise则不会执行
 * 
 */

const  p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('我是p的resolve')
    },1000)
})
const  p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('我是p1的resolve')
    },2000)
})
const  p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('我是p2的resolve')
    },3000)
})

Promise.race([p,p1,p2]).then(res=>{
    console.log('res====',res)
}).catch(err=>{
    console.log('res====',err)
})