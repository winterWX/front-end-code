
// 封装可迭代的类
class ClassRoom {
    constructor(name,age,address){
        this.nameArr = name
        this.age = age
        this.address = address
    }
    [Symbol.iterator](){
        let index = 0
        return {
            next:()=>{
                if(index < this.nameArr.length){
                    return { done: false, value: this.nameArr[index++]}
                }else{
                    return { done: true, undefined}
                }
            },
            // 终结迭代器
            return(){
                console.log('迭代器被终结了---')
                return { done: false, value: undefined}
            }
        }
    }
}

const stu = new ClassRoom(['111','222','333'],30,'北京')

for(let item of stu){
    console.log('item=====',item)
    if(item === '222') break
}

