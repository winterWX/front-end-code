/**
 *  Reflect 是一个对象，意思是反射
 *  
 *  1.提供了很多操作对象的方法，对对象本身的操作更加的规范了
 *  2.reflect 拥有对应proxy的方法 属性
 * 
 */

let obj = {
    name:'wx11',
    age: 20 
}

let newProxy = new Proxy(obj,{
    get(target,key){
        console.log('get------')
        // return  target[key] 还是对原对象进行直接操作的
        return Reflect.get(target,key)  // 间接的获取的原对象的值，然后返回出去了
    },
    set(target,key,newVal){
        // 这里 Reflect.set(target,key,newVal) 其实是有返回值的，可以检查属性的值是否设置成功了
        console.log('set------')
        Reflect.set(target,key,newVal)
    }
})

newProxy.name = 'hello'

console.log("obj.name",obj.name)
