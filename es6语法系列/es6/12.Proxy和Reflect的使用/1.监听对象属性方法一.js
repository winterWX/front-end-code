const obj = { name:'wx', age: 30 }

/** 使用 Object.defineProperty 进行对属性的监听
 * 
 *  1.Object.defineProperty的设计初衷是为了设置对象属性描述的，并不是专门为了监听属性值的变化的
 *  2.Object.defineProperty只能监听设置属性值和获取属性值的过程，对新增属性 和 属性的删除是监听不到的
 *  3.Object.defineProperty 是对原来的对象属性描述符进行修改
 * 
*/

Object.keys(obj).forEach(key=>{
    let values = obj[key]
    Object.defineProperty(obj,key,{
        get(){
            console.log(`获取${key}的值`)
            return values
        },
        set(newVal){
            console.log(`设置${key}的值`)
            values = newVal
        }
    })
})

obj.name = '111'
obj.age = 10
console.log(obj.name,obj.age)