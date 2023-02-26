
var  obj ={
    name: 'hello',
    age: 30
}

console.log(obj.address)

/**
 *  当执行 console.log(obj.address)时
 *  就会触发getter方法
 *  1.先到 obj里找
 *  2.再到obj._proto_(只要是对象就会有__proto__隐式原型)
 * 
*/

// 原型链的形成  prototy chian

// obj -> obj.__proto__-> obj.__proto__.__proto__ -> obj.__proto__.__proto__.__proto__

// 嵌套形式：
// obj:{
//     __proto__:{
//         __proto__:{
//             __proto__:{
//                 __proto__:{
        
//                 }
//             }
//         }
//     }
// }