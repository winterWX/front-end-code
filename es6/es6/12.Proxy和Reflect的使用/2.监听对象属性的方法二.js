
/**
 *    
 *  Proxy 代理对象
 * 
 *  通过代理对象对原对象进行映射，修改代理对象的属性时原对象的属性也会发生变化
 *  1.proxy 是一个类，可以监听代理对象属性的变化
 * 
 */

let obj = {
    name: 'wx',
    age: 20,
    title:'alt'
}

let newProxy = new Proxy(obj, /** 属性描述对象 */{
    // 获取属性值
       get(/*被代理的对象*/ target, key){
            console.log('获取属性的值')
            return target[key]
       },
    // 设置属性值
       set(/*被代理的对象*/ target, key, newVal){
            console.log('设置属性的值')
            target[key] = newVal
       },
    // has 查看对象是否有某个属性
       has(target, key){
           console.log('查看对象是否有某个属性')
           return key in target
       },
    // 删除对象的某个属性
       deleteProperty(target, key){
           console.log('删除对象的某个属性')
           delete target[key]
       }
})

newProxy.name = '新的name值'
newProxy.age = 100

delete newProxy.title


console.log('obj.name',obj.name)
console.log('obj.age',obj.age)
console.log('flag' in obj)