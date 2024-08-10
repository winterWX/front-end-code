// <img id="#wx"/>
// 1.类型断言
// 2.类型断言在类里面的使用方法

// const el = document.getElementById('wx') as HTMLImageElement
// el.src = '../src'

/**
 *  类型断言相当于语言里类型转换，只不过是自己有意识的进行转换的
 */
class Person{}
class Student extends Person{
    sayHello(){
        console.log('你好啊,李银河');
    }
}

const p = new Student();
function sayHello(p:Person){
  (p as Student).sayHello();
}

sayHello(p)