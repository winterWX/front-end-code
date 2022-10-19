class Proson{
    // 必须初始化
    name: string
    age: number
    constructor(name:string, age:number){
        this.name  = name,
        this.age = age
    }
    eat(){
        console.log('正在吃饭====');
    }   
}

let p = new Proson('wx',19)

console.log('答应关于p的所有信息',p.name,p.age)