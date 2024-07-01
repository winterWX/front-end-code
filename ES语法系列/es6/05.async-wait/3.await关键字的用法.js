
/**
 * await 一般后面是一个表达式， 会返回一个promise
 * await 后面是普通值时  会直接返回的
 */

async function foo(){
    const data = await new Promise((resolve,reject)=>{})
    // 后面的代码相当于是在.then里执行的
    console.log('111111')
    console.log('111111')
    console.log('111111')
}
foo()


