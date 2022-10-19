/**
 *  遍历每一个元素并且返回对应的元素(可以返回处理后的元素) (map 映射 一一 对应)
 *  返回创建的新数组和原来旧数组的长度是一样的，使用比较广泛，但其性能还不如 forEach
 *  前两种写法都会改变原数组，第三中方式则不会改变原数组
 *  注意：不能使用break和continue跳出整个循环或当前循环的，会报错，但是结合try...catch可以实现跳出循环
 * 
 */

let data = [12,3,45,6,7,89];

let dataChange = data.map((item)=>{
    return item * 2
})
/** 元素是基本数据类型，是不会改变原数组的 */
console.log('data===',data);
console.log('dataChange===',dataChange);



/** 元素是引用数组类型，是会改变原数组的 */
var arr = [{a: 1, b: 2},{a: 11, b: 12}]
let newARR = arr.map((item)=>{
    item.b = 111
    return item
})

console.log('arr数组',arr)    // [{a: 1, b: 111},{a: 11, b: 111}]
console.log('newARR',newARR)   // [{a: 1, b: 111},{a: 11, b: 111}]


// 三、不会改变原数组
var arr = [{a: 1, b: 2},{a: 11, b: 12}]
let newARR2 = arr.map((item)=>{
    return {
    	...item,
    	b:111
    }
})
console.log('arr数组',arr) // [{a: 1, b: 2},{a: 11, b: 12}]
console.log('newARR2',newARR2) // [{a: 1, b: 111},{a: 11, b: 111}]

// 四、使用try...catch...可以跳出循环
try {
    var arr = [1, 2, 3, 4];
    arr.map((item) => {
        //跳出条件
        if (item === 3) {
            throw new Error("LoopTerminates");
        }
        console.log(item);
        return item
    });
} catch (e) {
    if (e.message !== "LoopTerminates") throw e;
};
