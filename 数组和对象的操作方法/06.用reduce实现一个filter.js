let array = [12,33,4,5,6,7,8,9,100]

let result = array.filter((item)=>{
    return item > 12
})


// console.log('result',result);
// console.log('result==array',array);

// 用reduce 实现 filter 
let reduceChange = array.reduce((pre,next)=>{
    return next >= 12 ? [...pre,next] : [...pre]
},[])

console.log('reduceChange',reduceChange);