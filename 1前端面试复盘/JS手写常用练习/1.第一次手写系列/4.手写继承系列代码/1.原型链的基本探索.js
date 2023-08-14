function Foo(name,address){
    this.names = name
    this.address = address
}

Foo.prototype.running = function(){
    console.log('正在跑步----')
}
Foo.prototype.work = '公务员'
let p1 = new Foo('wh','北京')

console.log('p1',p1)  // {name: 'wh',address:'北京'}
console.log('Foo.prototype', Foo.prototype)  // { running: [Function (anonymous)], work: '公务员' }
console.log(p1.__proto__ === Foo.prototype)  // true

