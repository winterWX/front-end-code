var test = {
    name: '王三',
    age: 20
}

var info = Object.create(test)

/**
 * info 对象的原型链
 * info._proto_ ----> test ---> test._proto_ ---> Object.prototype
 */

console.log(test.isPrototypeOf(info))  // true
console.log(Object.prototype.isPrototypeOf(info)) // true