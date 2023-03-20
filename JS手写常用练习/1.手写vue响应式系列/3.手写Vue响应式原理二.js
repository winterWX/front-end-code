/**
 *   手写响应式 练习
 * 
 *    1. 监听对象属性变化 采用 Proxy, 产生代理对象，操作代理对象，映射原对象
 *    2. 属性变化，执行依赖属性的函数， 要有收集依赖的，监听器
 *    3. 属性变化要存储属性 所依赖的函数， 并且要执行函数， 需要每个属性依赖的类
 *    4. 数据结构，要监听的对象可能有多个， 所以数据结构是
 *       对象 -- > 对象里的属性 --> 属性对应的依赖类
 *       {对象：{对象属性： 对象属性依赖的类 }}
 *   
 * 
*/

let changeObj = reactive({
    name:  '小明',
    age: 20
})
let changeObj2 = reactive({
    title:  '小明',
    alt: '没有内容的说明'
})

let activeFn = null
// const newProxy = new Proxy(obj,{
//     // 获取值的时候
//     get(target,key){
//         // 此时要找到 属性对应的类，来存储函数
//         const dep = getStorageAble(target,key)
//         dep.addPending()
//         return Reflect.get(target,key)
//     },
//     // 设置值的时候
//     set(target,key,newVal){
//         Reflect.set(target,key,newVal)
//         // 要通知对应的类，来执行存储的函数 
//         const dep = getStorageAble(target,key)
//         dep.notify()
//     }
// })

function reactive(obj){
    return new Proxy(obj,{
        // 获取值的时候
        get(target,key){
            // 此时要找到 属性对应的类，来存储函数
            const dep = getStorageAble(target,key)
            dep.addPending()
            return Reflect.get(target,key)
        },
        // 设置值的时候
        set(target,key,newVal){
            Reflect.set(target,key,newVal)
            // 要通知对应的类，来执行存储的函数 
            const dep = getStorageAble(target,key)
            dep.notify()
        }
    })
}

// 当属性依赖多个函数时，需要存储所有依赖的函数，然后get时获取值，set时通知执行所有函数
class Deep{
    constructor(){
        this.ableChange = new Set()        
    }
    addPending(){
        activeFn && this.ableChange.add(activeFn)
    }
    notify(){
        console.log('this.ableChange====',this.ableChange)
        this.ableChange.forEach(fn=>{
            fn()
        })
    }
}

// 数据结构存储
const storageWeakMap = new WeakMap()
function getStorageAble(target,key){
    let map = storageWeakMap.get(target)
    // 先需要进行搭建对应的结构
    if(!map){
        map = new Map()
        storageWeakMap.set(target,map)
    }
    let dep = map.get(key)
    if(!dep){
        dep = new Deep()
        map.set(key,dep)
    }
    return dep
}

// 收集依赖函数
function watchFn(fn){
    activeFn = fn
    fn() /**
     *  首次执行,会走到 Proxy里, 先将监听器 监听到的函数加到函数存储器里，但是不会通知执行的
        啥不也不干。
        当设置属性值时，设置成功了后 通知 执行存储器里的所有 属性依赖的 函数。
     */
    activeFn = null
}

// 函数收集
watchFn(nameChange1)
watchFn(nameChange2)

function nameChange1(){
    //console.log('changeObj.name',changeObj.name) 

    changeObj.name = 'ppppp'
    console.log('changeObj.name',changeObj.name)    
}

function nameChange2(){
    //console.log('nameChange2.name',nameChange2.name) 

    nameChange2.name = 'ppppp'
    console.log('nameChange2.name',nameChange2.name)    
}


