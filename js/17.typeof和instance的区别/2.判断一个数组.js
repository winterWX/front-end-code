const arr = [1,23,4]

// 方式一
console.log(Array.isArray(arr))

// 方式二 
console.log(arr instanceof Array)

// 方式三  因为数组也是  new Array() Array.constructor指向自己
console.log(arr.constructor === Array)    

// 方式四
console.log(Object.prototype.toString.call(arr) === '[object Array]')   