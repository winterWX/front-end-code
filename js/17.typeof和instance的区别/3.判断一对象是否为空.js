const obj ={
   //name: 'wx'
}

// 方式一
console.log(Object.keys(obj))

// 方式二
console.log(Object.getOwnPropertyNames(obj))

// 方式 三
console.log(JSON.stringify(obj))