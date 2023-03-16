/**
 *   finally 
 *   
 *   不管是resolve了，还是 reject都会走到finally里
 *  
 * 
 */


new Promise((resolve,reject)=>{
    resolve('aaaaa')
}).then(res=>{
    console.log('then里的逻辑', res)
}).catch(err=>{

}).finally(()=>{
    console.log('finally ---- 的逻辑')
})