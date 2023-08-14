const obj = {
    name:'111',
    age: 22,
    num : 3000
}

const newObj = Object.create(obj)


/**
 * 
 *   1.给父类对象添加属性和方法时，所有的子类对象都会拥有，
 *   2.单独添加时会出现重复代码
 */