function isObject(value){
    const valueType = typeof value
    return valueType !== null && (valueType === 'object' || valueType === "function")
}
function deepClone(originObject, map = new WeakMap()){
    // 判断是否是一个set类型
    if(originObject instanceof Set){
        return new Set([...originObject]) //重新创建重新赋值 
    }
    // 判断是否是一个Map类型
    if(originObject instanceof Map){
        return new Map([...originObject]) //重新创建重新赋值 
    }
    // 判断如果是Symbol的value,那么就创建一个新的Symbol
    if(typeof originObject === 'symbol'){
        return Symbol(originObject.description)
    }
    // 判断是函数类型，如果是函数类型就使用同一个函数
    if(typeof originObject === 'function'){
        return originObject
    }
    // 判断是不是引用类型
    if(!isObject(originObject)){
        return originObject
    }
    if(map.has(originObject)){
        return map.get(originObject)
    }
    // 判断传入的是不是数组
    let newObj = Array.isArray(originObject) ? [] : {}
    map.set(originObject,newObj)
    for(let key in originObject){  
        newObj[key] = deepClone(originObject[key],map)
    }
    // 上面 for... in 是遍历不出来 Symbol的key的，所以需要特殊处理
    const SymbolArray = Object.getOwnPropertySymbols(originObject)  // 这会是一个数组
    for(let keys of SymbolArray){
        newObj[keys] = deepClone(originObject[keys],map)
    }
    return newObj
}

let s1 = Symbol('aa')
let s2 = Symbol('bb')

let obj = {
    name: 'wx',
    age: 20,
    friends:{
        name: 'kobi',
        age: 300
    },
    hobbies:['abc','bca','cbd'],
    fo: function(){
       console.log('我是一个函数')
    },
    [s1]: 'abc',
    s2: s2, //  Symbol做为值不能拷贝
    set: new Set(['aa','bb','cc']),
    map: new Map([['aa','bb','cc'],[1,2,3]]),
    //info:obj
}

let newObj = deepClone(obj)
newObj.info = newObj //循环引用
console.log("新对象", newObj.info.info.info)
console.log("比较两个对象", newObj === obj)