/**
 *  应用场景：
 * 
 *  不能使用非构造函数创建出来的类调用类的方法
 * 
 */


const set = new WeakSet()
class Person{
    constructor(){
        set.add(this)  // new 对象的时候就会创建实例对象
    }
    running(){
        if(!set.has(this)){
           throw new Error('不能使用非构造函数创建出来的类调用类的方法')
        }
        console.log('正在跑步',this)
    }
}

const p = new Person()
p.running()

p.running.call({name:'11'})