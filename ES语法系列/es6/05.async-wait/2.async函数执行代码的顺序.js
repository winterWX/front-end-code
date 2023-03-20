async function foo(){
    console.log('没有await时 和正常函数一样')
    throw new Error('message')
    console.log('end-----')
}
foo()

/**
 * 
 *  当异常出现在中间时，异常后面的代码不在执行
 * 
 */