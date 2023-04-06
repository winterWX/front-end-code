const obj = {
    name:'111',
    age: 22,
    num : 3000
}

const newObj = createObj(obj,name,age)   

function createObj(obj,name,age){
    var stu = Object.create(obj)
    stu.name = name
    stu.age = age
    return stu
}
