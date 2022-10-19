/** 数组常用操作 */
for(){}   /**
   消耗性能最低的数组循环，
   1.可以将数组的长度缓存起来，避免重复获取
   let params = [12,3,4,5,66,77]
   let num = params.length
*/  

iterable.forEach(element => {
    
});

let arr = [1, 2, 3, 4, 5],
   key;
try {
    arr.forEach(item => {
      if(item === 2) {
            key = item; // 记录跳出循环时机
            throw Error()
      }
      console.log(item)
    })
} catch(error) {
  // 跳出循环后要做的操作
}

/**
    4. 循环的数组元素是基本数据类型，不会改变原数据的数据，循环的数组元素为对象，会改变原数组的对象属性的值
    5. 循环过程中不支持修改索引，回调中使用return不会报错，但是无效
    注意：不能使用break和continue跳出整个循环或当前循环的，会报错，但是结合try...catch可以实现跳出循环
**/

iterable.map((item) => {
    
})/**
*
*/


iterable.filter((item) => {
    
}) /**
   遍历数组，过滤出符合条件的元素并返回一个新数组，没有符合条件的元素则返回空数组
*/

iterable.find((item) => {
    
})/**
*  遍历数组，返回符合条件的第一个元素，如果没有符合条件的元素则返回 undefined
*/

iterable.findIndex((item) => {
    
}) /**
*  遍历数组，返回符合条件的第一个元素的索引，如果没有符合条件的元素则返回 -1
*/


some  //  遍历数组，只要有一个以上的元素满足条件就返回 true，否则返回 false

every  // 遍历数组，每一个元素都满足条件 则返回 true，否则返回 false

findLast  

findLast