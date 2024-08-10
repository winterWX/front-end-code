// 类型缩小的使用

/**
 *  typeof  类型操作符
 *  instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 *  in 检查指定的属性是否在指定的对象或其原型链中
*/

type IDType = number | string;  //联合类型

function printId(id: IDType){
   if(typeof id === 'string'){
      console.log(id.toUpperCase())
   }else{
      console.log(id);
   }
}

//instanceof
function printTime(item: string | Date){
    if(item instanceof Date){
        console.log(item.toUTCString());
    }else{
        console.log('item===',item);
    }
}

class Student{
  studying(){
  }
}

class Teacher{
   teaching(){
   }
}

function work(p:Student | Teacher){
    if(p instanceof Student){
        console.log(p.studying());
    }else{
        console.log(p.teaching());
    }
}


// in 的使用
type Fish ={
    swimming:()=> void
}

type Dog={
    running: ()=> void
}

function walk(animal: Fish | Dog){
    if('swimming' in animal){   
        animal.swimming();
    }else{
        animal.running();
    }
}