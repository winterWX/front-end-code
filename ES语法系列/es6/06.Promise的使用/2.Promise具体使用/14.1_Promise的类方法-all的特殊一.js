/**
 * Promise 如果单独定义了.then和.catch
 * 
 * 就会先被自己.then和.catch方法捕获
 *  
 */

const p1 = new Promise((resolve,reject)=>{
    reject('p1--------')
}).then(res=>{
    console.log('我是p1--自己的then')
}).catch(err=>{
    console.log('我是p1--自己的then',err)
})

const p2 = new Promise((resolve,reject)=>{
    resolve('p2--------')
})
const p3 = new Promise((resolve,reject)=>{
    reject('p3--------')
}).catch(err=>{
    console.log('我是p3自己的catch',err)
})

// 注意： 在Promise.all()里如果传不是Promise类时，它就会把值进行包裹成,promise.resolve('某个值')

Promise.all([p1,p2,p3,'string']).then((res)=>{
    console.log('res=====',res)  // [undefined,'p2--------',undefined]
}).catch((err)=>{
    console.log('err=====',err)
})