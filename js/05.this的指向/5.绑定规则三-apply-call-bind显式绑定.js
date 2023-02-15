function calc(num1,num2){
   console.log(num1+num2,this)
}

calc.call('test1',10,20)
calc.call('test2',30,20)


/** bind 绑定 */

function foo(){
    console.log(this)
}

var fo = foo.bind('fo')  //绑定后会返回一个函数
fo() // this fo