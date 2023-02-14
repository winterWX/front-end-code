
/**
 * 案例一
*/

var n = 100
function foo1(){
    console.log("n-1",n)  //100 
} 
function foo2(){
    var n = 200
    console.log("n-2",n) //200
    foo1()
} 
foo2()
console.log("n-3",n)  // 100


// 分析：
   
//   Go:{
//     n : 100
//     foo1: 0xf001
//     foo2: 0xf002
//   }
//   foo2:Ao:{
//     n : 200
//   }
//   foo1:Ao:{
//   }



/**
 * 案例二
*/

var m = 2
function boo(){
    console.log(m)  // undefined
    return 
    var m = 9
}

boo()