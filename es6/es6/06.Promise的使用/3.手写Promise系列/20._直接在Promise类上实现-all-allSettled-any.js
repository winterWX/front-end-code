
Promise.wxAllSettled = function(promises){
    return new Promise((resolve,reject)=>{
        let values = []
        promises.forEach(promiseItem=>{
            promiseItem.then(res=>{
                values.push({status: 'fulfilled',value: res})
                if(values.length === promises.length){
                    resolve(values)
                }
            },err=>{
                values.push({status: 'rejected',reason: err})
                if(values.length === promises.length){
                    resolve(values)
                }
            })
        })
    })
}

Promise.wxAll = function(promises){
    return new Promise((resolve,reject)=>{
        let values = []
        promises.length > 0 && promises.forEach(promiseItem=>{
            promiseItem.then(res=>{
               values.push(res) // 收集所用的结果
               if(values.length === promises.length){
                resolve(values)
               }
            },err=>{
                reject(err)
            })
        })
    })
}

Promise.wxRace= function(promiseArr){
    return new Promise((resolve,reject)=>{
        promiseArr.forEach(item=>{
            item.then(res=>{
                resolve(res)
            },err=>{
                reject(err)
            })
        })
    })
}

Promise.wxAny = function(promiseArr){
    return new Promise((resolve,reject)=>{
        let reason = []
        promiseArr.forEach(item=>{
            item.then(res=>{
                resolve(res)
            },err=>{
                reason.push(err)
                if(reason.length === promiseArr.length){
                    reject(reason)
                }
            })
        })
    })
}

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('1111')
    },1000)
})

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('2222')
    },2000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('3333')
    },500)
})

// Promise.wxAll([p,p1,p2]).then(res=>{
//     console.log('res===wxAll',res)
// },err=>{
//     console.log('err===wxAll',err)
// })

// Promise.wxAllSettled([p,p1,p2]).then(res=>{
//     console.log('res===wxAllSettled',res)
// })

Promise.wxRace([p,p1,p2]).then(res=>{
    console.log('res===any',res)
},err=>{
    console.log('err===any',err)
})

// Promise.wxAny([p,p1,p2]).then(res=>{
//     console.log('res===any',res)
// },err=>{
//     console.log('err===any',err)
// })