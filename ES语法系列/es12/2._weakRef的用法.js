/**
 *  weakRef 会复制对象创建一个弱引用
 * 
*/

const finalizationRegistry = new FinalizationRegistry((val)=>{
    console.log('finalizationRegistry 监听的对象被销毁了',val)
})

let obj = {
    name:'111'
}

finalizationRegistry.register(obj,'监听的对象')
const weakRefVal = new WeakRef(obj)   // 此时就会常见一个弱引用指向 obj 的对象

// 置空 obj 对象
obj = null 

setTimeout(()=>{
    // 获取弱引用对象的值
    console.log(weakRefVal.deref()?.name)  // 此时对象已经被GC回收了，所以获取不到值
},10000)