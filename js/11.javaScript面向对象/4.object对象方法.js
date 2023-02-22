Object.defineProperty() // 配置单个属性描述符
Object.defineProperties() // 配置多个属性描述符
Object.getOwnPropertyDescriptor() //获取单个属性描述符
Object.getOwnPropertyDescriptors() //获取多个属性描述符
Object.preventExtensions()  //禁止对象添加新的属性
Object.seal()  // 阻止添加新属性并将所有现有属性标记为不可配置
Object.freeze()  //冻结对象，属性不可被修改，描述符不可被配置，甚至原型也不能被修改

//ES6
Object.keys()
Object.values()
Object.entries()
Object.assign()