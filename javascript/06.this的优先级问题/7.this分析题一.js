function Person(name){
   this.name = name
   this.foo = function (){
    console.log(this.name)
   }
   this.foo2 = ()=> console.log(this.name)
   this.foo3 = function (){
        return function (){
            console.log(this.name)
        }
   }
   this.foo4 = function (){
        return ()=>{
            console.log(this.name)
        }
   }
}
var f = new Person('Person1')  
    f = {
        name: Person1,
        foo1: function(){console.log(this.name)},
        foo2:()=> console.log(this.name),
        foo3:function (){ console.log(this.name)},
        foo4:()=>{ console.log(this.name) }
    }

var f2 = new Person('Person2')  
    f2 = {
        name: Person2,
        foo1: function(){console.log(this.name)},
        foo2:()=> console.log(this.name),
        foo3:function (){ console.log(this.name)},
        foo4:()=>{ console.log(this.name) }
    }

f.foo1()   //  'Person1'
f.fool.call(f2) //  'Person2'


f.foo2()   //  'window'
f.foo2.call(f2) //  'window'