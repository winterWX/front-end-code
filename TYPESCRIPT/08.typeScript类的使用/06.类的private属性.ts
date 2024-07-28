
/*** private 只有内部成员可访问  */

class Person{
    private _name: string 
    constructor(name:string){
        this._name = name
    }
   
    //类的访问器属性
    set name(newVal){
       this._name = newVal
    }
    
    get name(){
       return this._name
    }
}

let P = new Person('你好');
P.name = '你好 啊'
console.log(P.name);
export {}