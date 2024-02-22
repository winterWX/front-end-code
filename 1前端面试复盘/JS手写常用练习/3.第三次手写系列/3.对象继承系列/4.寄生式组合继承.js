function Person(name,age){
    this.name = name
    this.age = age
}
function Son(name,age,sok){
    Person.call(name,age,sok)
    this.sok = sok
}

Son.prototype = Object.create(Person.prototype)

Object.defineProperty(Son.prototype,'constructor',{
    configurable: true,
    enumerable: true,
    value: Son
})

function sonDom(){

}