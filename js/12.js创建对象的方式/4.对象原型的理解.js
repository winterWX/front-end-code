var obj = {
    name:'王二',
    age: 40
}

// 1.每个对象都有一个隐式原型 __proto__,隐藏在对象里
obj = {
    name:'王二',
    age: 40,
    __proto__: {}   // 隐式原型的值默认就是一个空对象
}


Object.getPrototypeOf() // 获取对象隐式原型的方法

/**
 * 2. 当获取对象上的某个属性的值时就会触发对象的get方法
 *    get会进行两步操作 先去对象上找，找不到了就回去对象原型上找
 * 
 *   例如： 
 */

 console.log("开始",obj.address)  // address在对象和对象原型上 都没有

 obj.__proto__.address = '北京'

 console.log("最后",obj.address)  // address对象原型上找到了