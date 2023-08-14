/**
 *   手写 vue3 响应式原理
*/

let obj = reactive({
    name: 'wx',
    age: 20
})

let obj2 = reactive({
    num: 10,
    num2: 30
})


let reactiveArrFns = null
// 每个属性以来的类
class Deep{
    constructor(){
        this.reactiveList = new Set()
    }
    append(){
        if(reactiveArrFns){
            this.reactiveList.add(reactiveArrFns)
        }
    }
    notify(){
        this.reactiveList.length > 0 && this.reactiveList.forEach(fn=>{
            fn()
        })
    }
}

const weakMapObj = new WeakMap()   // key对象 - value: {属性： deep}
function getReactiveDeep(target,key){
    let map = weakMapObj.get(target)
    if(!map){
        map = new Map()
        weakMapObj.set(target,map)
    }
    let deep = map.get(key)
    if(!deep){
        deep = new Deep()
        map.set(key,deep)
    }
    return deep
}

// 使用 proxy 对 响应式对象进行监听
// let newProxy = new Proxy(obj,{
//     get:(target,key)=>{
//         let deepChange = getReactiveDeep(target,key)
//         deepChange.append()
//         return Reflect.get(target,key)
//     },
//     set:(target,key,newVal)=>{
//         Reflect.set(target,key,newVal)
//         let deepChange = getReactiveDeep(target,key)
//         deepChange.notify()
//     }
// })

function watch(fn){
    reactiveArrFns = fn
    fn()
    reactiveArrFns = null
}

function ageChange(){
    obj.age = 30
    console.log(obj.age)
}
function nameChange(){
    obj.name = 'change name'
    console.log(obj.name)
}

function obj2Change(){
    obj2.num2 = 1000
    console.log(obj2.num2)
}
function obj2Change1(){
    obj2.num = 3000
    console.log(obj2.num)
}



watch(ageChange)
watch(nameChange)
watch(obj2Change)
watch(obj2Change1)

function reactive(obj){
    return new Proxy(obj,{
        get:(target,key)=>{
            let deepChange = getReactiveDeep(target,key)
            deepChange.append()  // 进行函数添加
            return Reflect.get(target,key)
        },
        set:(target,key,newVal)=>{
            Reflect.set(target,key,newVal)
            let deepChange = getReactiveDeep(target,key)
            deepChange.notify()  // 执行函数
        }
    })
}