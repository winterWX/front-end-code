const arr = [12,23,34,4,4,5,50,60,10,12]

// 去重
const newArr = []
for(const item of arr){
    if(newArr.indexOf(item) == -1){
        newArr.push(item)
    }
}

console.log('去重后的数组', newArr)

// 使用Set去重
const newArr2 = new Set([...arr])     //类似  Array.form(arr)
console.log('去重后的数组', newArr2)