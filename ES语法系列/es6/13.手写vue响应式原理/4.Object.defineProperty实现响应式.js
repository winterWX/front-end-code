// 当前需要收集的响应式函数
let activeReactiveFns = null

let obj1 = { name: 'wx', age:18 }
let obj2 = { title:'title', alt:'alt' }

let objVal = reactive(obj1)
let objVal2 = reactive(obj2)


// 依赖类
class Deep{
    constructor(){
        this.allFunction = new Set()  // 函数集合，确保函数的唯一性
    }
    addPend(){
        if(activeReactiveFns){
            // 直接添加活跃函数变量
            this.allFunction.add(activeReactiveFns)  // 添加到函数集合中
        }
    }
    notify(){
        this.allFunction.forEach(fn=>{ fn() })  // 执行所有的依赖
    }
}

// 创建属性应用的类   --- 数据结构为  weakMap(对象， {对象的属性, deep类})
let weakMap = new WeakMap()
function getMapMain(target,key){
    let mapObj = weakMap.get(target) // 通过对象获取  {对象的属性, deep类})
    // 首次调用时没有map，需要手动添加
    if(!mapObj){
        mapObj = new Map()
        weakMap.set(target,mapObj)  
    }
    let dep = mapObj.get(key)  // 通过key 获取对应的 Deep类
    if(!dep){
        // 首次调用时没有依赖类对象，需要手动添加
        dep = new Deep()
        mapObj.set(key,dep)
    }
    // 返回对应的类
    return dep
}

// 1.监听对象
function reactive(obj){
    Object.keys(obj).forEach(key=>{
        let value = obj[key]
        Object.defineProperty(obj,key,{
            get(){
                //  watchFn里 fn 执行的时候就会根据 target 和 key 获取对应的 depend对象
                let depend = getMapMain(obj,key)
                depend.addPend()  // 将依赖加到depend类里
                return value
            },
            set(newVal){
                value = newVal
                // 通知 属性对应的depend对象，执行依赖函数
                getMapMain(obj,key).notify()  // 通知依赖类方法进行执行
            }
        })
    })
    
    return obj
}

// 收集依赖函数
function watchFn(fn){
    activeReactiveFns = fn
    fn() // 函数调用后会走到 属性对应的get方法里
    activeReactiveFns = null // 存储完就要初始化
}

watchFn(function(){
    console.log('name属性发生变化后执行', objVal.name)
})
watchFn(function(){
    console.log('age属性发生变化后执行', objVal.age)
})

watchFn(function(){
    console.log('objVal2 - objVal2.title', objVal2.title)
})

console.log('-------------------------------------------')
objVal.name = '999999'
objVal.age = 1000
objVal2.title = '-----'
