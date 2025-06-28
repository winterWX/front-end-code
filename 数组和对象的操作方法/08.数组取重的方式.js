
const arg = [2,3,54,6,2,3,4,5,2,6,9];

/**
 *  方式一
*/
console.log('取重后的结果', [...new Set(arg)]);

/**
 *  方式二
*/
let argArray = arg.filter((item,index,self)=>{
    return self.indexOf(item,0) === index
})
console.log('方式二',argArray)

/**
 * 方式三
*/
let arrayLast = arg.reduce((prev,cur)=>{ //prev添加的集合，cur当前值
    return prev.includes(cur) ? prev : [...prev, cur]
},[])

console.log('方式三',arrayLast);
