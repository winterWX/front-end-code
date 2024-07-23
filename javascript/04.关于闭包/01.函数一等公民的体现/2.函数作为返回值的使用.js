/**
 *  函数作为返回值的使用
*/

function foo(){
    function bar(){
        console.log('bar')
    }
    return bar
}

var fn = foo()
fn()