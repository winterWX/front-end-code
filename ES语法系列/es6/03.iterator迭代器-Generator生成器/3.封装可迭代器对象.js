// 封装一个通用的迭代器
function iteratorEnhance(arg){
    let len = 0
    return {
        next: function(){
            if(len < arg.length){
                return { done : false, value: arg[len++]}
            }else{
                return { done : true, value: undefined}
            }
        }
    }
}

const num2 = [223,3345,56547,5567567,678678]
const iter1 = iteratorEnhance(num2)

console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())
console.log(iter1.next())

const names = ['111','222','333']
const iter11 = iteratorEnhance(names)
console.log(iter11.next())
console.log(iter11.next())
console.log(iter11.next())
console.log(iter11.next())
console.log(iter11.next())
// iter1.next()