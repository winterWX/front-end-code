// 异步函数的演变过程  
function requestData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(url)
        },2000)
    })
}

// 演变一
// requestData('wx').then(res1=>{
//     requestData(res1+'aa').then(res2=>{
//         requestData(res2+'bb').then(res3=>{
//             requestData(res3+'cc').then(res4=>{
//                 console.log('res4===',res4)
//             })
//         })
//     })
// })


// 演变二 
// requestData('wx').then(res=>{
//     return requestData(res+'aa')
// }).then(res1=>{
//     return requestData(res1+'bb')
// }).then(res2=>{
//     return requestData(res2+'cc')
// }).then(res3=>{
//     console.log('res3====',res3)
// })

// 演变三
function* createdGenerator(){
    let res = yield requestData('wx')  
    let res1 = yield requestData(res+'aa')    
    let res2 = yield requestData(res1+'bb') 
    let res3 = yield requestData(res2+'cc')   
    console.log('res3====',res3)          
}

//const gen = createdGenerator('wx')

// 手动执行
// gen.next().value.then(res=>{
//     gen.next(res).value.then(res1=>{
//         gen.next(res1).value.then(res2=>{
//             gen.next(res2).value.then(res3=>{
//                 gen.next(res3)
//             })
//         })
//     })
// })

// 无需手动调用，自动化调用
function execGeneRator(genFn){
    const generator = genFn()
    function exec(res){
        let data = generator.next(res)
        if(data.done){
            return data.value
        }
        data.value.then(res=>{
            exec(res)
        })
    }
    exec()
}
execGeneRator(createdGenerator)


// 异步的历程

/**
 * 
 *  1.从原来的回调函数的层层嵌套
 *  2.到Promise的链式调用
 *  3.到生成器函数 yield 和 next 控制函数的执行
 *  4.到tj写的co库 自动化执行生成器函数，每一步可以获取结果
 *  5.es8 async 和 await 的出现，有内置的执行器，异步代码同步化
 * 
 * 
 * 
 */