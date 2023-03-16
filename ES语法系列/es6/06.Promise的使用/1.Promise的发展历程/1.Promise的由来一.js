/**  Promise 之前 */

// 异步函数  -  使用回调函数来获取异步结果
function requestFn(successCallback,failCallback){
    let resultVal = 'success'
    setTimeout(()=>{
        if(resultVal == 'success'){
            successCallback('success')
        }else{
            failCallback('fail')
        }
    },1000)
}

// 在其他模块调用函数
requestFn(function successCallback(res){
    console.log('res====',res)
},function failCallback(err){
    console.log('err====',err)
})


/**
 * 
 *  弊端一：
 *  这种作法是，自己实现了对异步函数的封装，success函数和fail函数都是自己规定的，
 *  通用性不强，没有统一的规范
 * 
 * 
 */