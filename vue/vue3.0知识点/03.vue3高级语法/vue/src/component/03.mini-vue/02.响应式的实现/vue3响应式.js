const targetMap = new WeakMap();
let activeEffect = null;

class Dep{
    constructor() {
        this.subscribers = new Set(); //依赖的集合
    }
    depend(){
        if(activeEffect){
            this.subscribers.add(activeEffect);
        }
    }
    notify(){
        this.subscribers.forEach(effect=>{
            effect();
        })
    }
}

// vue3 对数据的劫持
function reactive(raw){
    return new Proxy(raw,{
        get(target,key){
            const dep = getDep(target,key);
            dep.depend();
            return target[key];
        },
        set(target,key,newValue){
            const dep = getDep(target,key);
            target[key] = newValue;
            dep.notify();
        }
    })
}

// map {{key : value}}   // 键值对的形式，key必须是字符串
// weakMap {{ object : value }}  // key 必须是对象
function getDep(target,key){
    // 1.根据对象(target)取出 对应的Map对象
    let depsMap = targetMap.get(target);
    if(!depsMap){
        depsMap = new Map();
        targetMap.set(target,depsMap);
    }

    // 2.取出具体的dep对象
    let dep = depsMap.get(key);
    if(!dep){
        dep = new Dep();
        depsMap.set(key,dep)
    }
    return dep;
}

function watchEffect(effect){
    activeEffect = effect;
    effect();
    activeEffect = null;
}


let info= reactive({ counter: 100, name: 'wx'});
let foo = reactive({ height: 1.88});

watchEffect(function doubleCounter(){
    console.log('counter>1111',info.counter*88);
});

watchEffect(function changeCounterAndName(){
    console.log('counter/name>2222',info.counter + '' + '' + info.name);
});

watchEffect(function changeHeight(){
    console.log('height>333',foo.height);
});

info.counter++ ; 
info.name = '牛牛';
foo.height = 0;


/**
 *  1.proxy作用原对象会生成一个代理对象，对代理对象的操作都会映射到原对象。
 *  2.代理对象的每一属性都有一个依赖对象Dep
 *  2.watcher订阅对象上每一个属性对应的所有操作方法。
 *  3.当页面获取属性值的时候就会触发代理对象的get方法，
 *    get会将watcher订阅到的属性对应方法，通过Dep里的添加订阅者的方法，存储到数组里，然后返回当前属性的值。
 *  3.当属性发生改变，就会触发代理对象的set方法，会对当前属性重新赋值，然后通知该属性依赖的Dep对象，执行数组里存储的所有方法。
 */