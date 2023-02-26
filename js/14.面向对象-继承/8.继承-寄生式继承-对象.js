/**
 *  为了解决原型式继承存在的问
 * 
 *  寄生式继承 封装了工厂函数，借助了原型式继承的方式生成了对象
 * 
 */


var test = {
    learning: '学习',
    runing: function(){
        console.log('在跑步')
    }
}

function createLast(name,age){
    var stu = Object.create(test)
    stu.name = name
    stu.age = age
    return stu
}

var p = createLast('王丫',20)
console.log('p',p)


/**
 *  缺点：只会产生一个类
 *  明确不到类的类型
 * 
 */