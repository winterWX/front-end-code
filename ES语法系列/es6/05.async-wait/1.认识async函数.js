/**
 * 
 * 
 * // 异步的历程

/**
 * 
 *  1.从原来的回调函数的层层嵌套
 *  2.到Promise的链式调用
 *  3.到生成器函数 yield 和 next 控制函数的执行
 *  4.到tj写的co库 自动化执行生成器函数，每一步可以获取结果
 *  5.es8 async 和 await 的出现，有内置的执行器，异步代码同步化
 * 
 * 
 * 
 * 
 *  async - await 是 promise + generator 的语法糖
 * 
 *  1. async 函数有内置的执行器，不用generator函数 next()函数的调用方法了， 吸取了tj写的co的执行原理
 *  2. 是将generator的 * 变成了async
 *  3.  将generator 的 yield 变成了 await
 *  4. 使代码的执行同步化
 *  
 * 
 */


async function foo(){
    console.log('没有await时 和正常函数一样')
     
    // 特点一： 执行里面的代码
    // 特点二： async 函数的返回值是Promise
    //return '111'
    throw new Error('message')
}

const Foo = foo()

Foo.then(res=>{
    console.log('res====',res)
},err=>{
    console.log('err====',err) // 会捕获到错误
})

