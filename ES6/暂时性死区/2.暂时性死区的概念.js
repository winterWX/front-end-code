/**
 * 案例二
*/

var tem = 'hello'
if(true){
    console.log(tem)   // error 
    let tem = '111'
}
/**
 *  案例二
 *    1.在块级作用域中用 let 和 const声明变量, 已经绑定到了这个局部作用域中，所以不会向外查找变量
 *    2.在let/const 命令声明变量之前，该变量都是不可用的称为暂时性死区
 * 
 */