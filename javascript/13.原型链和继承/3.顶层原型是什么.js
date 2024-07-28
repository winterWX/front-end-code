
var obj = {
    name: 'he he',
    age: 30
}

console.log(obj.address)    // undefined, 由此可见是有顶层的，在顶层没有找到就返回undefined

// 顶层是什么 ？
console.log(obj.__proto__)  // [Object: null prototype] {}
console.log(obj.__proto__.__proto__) // null ----> 说明 obj.__proto__上已经没有__proto__了。 [Object: null prototype] {}就是顶层