function Person() {
    this.name = '陈丹青';
    this.friends = [23];
    //this.codeName = '22'
}
var person = new Person()
person.__proto__.codeName = 'li li'
Person.prototype.codeName = 'hao hao'

console.log('person', person)
console.log('person--__proto__', person.codeName)
console.log('person--prototype', person, person.codeName)
// 查找顺序

// 对象自身-- 对象.__proto__-- 对象.prototype