
/** new 箭头函数 */
// const test = ()=>{}
// const bar = new test()

/** new 一般函数 */
function a(){}
const b = new a()
// console.log("bar====", bar==='{}', bar);
console.log("b====", b.constructor);