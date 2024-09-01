
/** resolve传入的是 对象的情况 */

const parentObj ={
  name:'wx',
  then: function(resolve,reject){
      //resolve('success')
      reject('fail')
  }
}

new Promise((resolve,reject)=>{
    resolve(parentObj) // 传入的是对象
}).then((res)=>{
    console.log('res====',res)  // 由对象里的resolve 决定
}).catch((err)=>{
    console.log('err====',err)   // 由对象里的reject 决定
})