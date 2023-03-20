

const arr = ['12','23','45']
// 迭代器函数
// function createdExecutor(arr){
//     let index = 0
//     return {
//         next: ()=>{
//             if(index < arr.length){
//                 return { done: false,  value: arr[index++]}
//             }else{
//                 return { done: true, value: undefined}
//             }
//         }
//     }
// }

// 用生成器 替换迭代器函数
function* createdExecutor(arr){
    
    // 方式一
    // for(let item of arr){
    //     yield item
    // }

    // 方式二
    yield* arr  // 后面必须跟的是可迭代对象，----- 方式二就是方式一 语法糖
}

const getGenRor = createdExecutor(arr)
console.log(getGenRor.next())
console.log(getGenRor.next())
console.log(getGenRor.next())
console.log(getGenRor.next())



// 创建一个数组范围 10-20
function* createdRan(start,end){
    let index =  start 
    while(index <= end){
        yield index++
    }
}

const lastFn = createdRan(10,20)
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())
console.log(lastFn.next())