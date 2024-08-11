// 1.生成器  --- 已经熟知

// 2.迭代器
let set: Set<number> = new Set([1,2,3,4,4,4]);
let map: Map<any,any> = new Map(); 
map.set(['1','2','3'],'我是测试数据');

//封装迭代方法
const each = (value: any)=>{
    let it = value[Symbol.iterator]();
    let next: any = { done: false };
    while(!next.done){
        it.next();
        if(!next.done){
          console.log(next.value);
        }
    }
}
each([1,2,3,4,5]);

// 迭代器的语法糖 for of, for of不能遍历对象
// 解构的原理 都是底层调用iterator

// 模拟使得对象可以解构

const obj = {
    max: 20,
    current: 1,
    [Symbol.iterator](){
        return {}
    }
}