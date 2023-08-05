const obj = {
   //name: 'wx'
}

// 方式一
console.log(Object.keys(obj).length === 0)

// 方式二
console.log(Object.getOwnPropertyNames(obj).length === 0)

// 方式 三
console.log(JSON.stringify(obj).length === 0)