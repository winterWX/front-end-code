/**
 *   finalizationRegistry 的用法
 *   
 *   1. finalizationRegistry 是一个类
 *   当对象被销毁了，就会进行监听
 *   
 */


const finalizationRegistry = new FinalizationRegistry((val) => {
    console.log('监听的对象被销毁了', val)
})

let obj = {
    name: 'liu liu'
}

finalizationRegistry.register(obj, 'obj')
obj = null