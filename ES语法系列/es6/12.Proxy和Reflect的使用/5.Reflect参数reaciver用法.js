const obj ={
    title: '测试对象',
    _name: '私有name',
    // 属性描述符方法
    get name(){
        console.log('this=====',this)
        return this._name
    },
    set name(val){
       console.log('this=====',this)

       /**
        * 
        *  receiver的作用 
        * 
        *  1.改变name值时，如果不传递receiver时，就会直接修改原对象的属性，此时的this不是代理对象，
        *  这样就违背了Proxy的初衷，Proxy是对代理对象进行操作的
        *  2.传递receiver时，Reflect就会对代理对象进行操作
        * 
        */
       this._name = val
    }
}

// 监听对象属性
let newProxy = new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(target,key,receiver)
    },
    set(target,key,newVal,receiver){
        Reflect.set(target,key,newVal,receiver)
    }
})

newProxy.name = '修改后的值'

console.log('newProxy.name', newProxy.name)

console.log('==',Reflect)