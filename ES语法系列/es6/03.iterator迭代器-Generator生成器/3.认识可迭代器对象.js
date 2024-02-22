
//  创建可迭代对象
const createdIterator = {
   names: ['abb','bba','ccd'],
   [Symbol.iterator]: function(){
        let index = 0
        return {
            next: ()=>{
                if(index < this.names.length){
                    return { done: false, value: this.names[index++]}
                }else{
                    return { done: true, value: undefined}
                }
            }
        }
   }
}

// 可迭代器对象 返回一个 迭代器对象
const iterator = createdIterator[Symbol.iterator]()
console.log('可迭代对象',iterator.next())
console.log('可迭代对象',iterator.next())
console.log('可迭代对象',iterator.next())
console.log('可迭代对象',iterator.next())

/**
 *   for....of,遍历的  必须是一个  可迭代对象，不是迭代对象， --------- 注意
 * 
 *   语法底层就是  可迭代对象 先返回一个迭代对象 调用next(), 返回对象，
 *   再根据对象的done属性值判断，是false时,拿到对象的value值。 如果拿到对象done属性是true，就会停止返回值
*/

for(item of createdIterator){  // createdIterator 可迭代对象
    console.log('item=====',item)
}