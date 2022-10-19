let data ={
    name: 'wx',
    age: 90
}
let array = [1,3,4,5,6,7,8,9,0];

/**
 * 区别一 : for of 不能遍历 不可迭代对象，for in 可以遍遍历可迭代对象
*/

for(let item of data){
    console.log('==',item);
}

for(let item in data){
    console.log('==',item);
}

/**
 * 区别 二 : for in 遍历数组会将索引当作key进行遍历，for of就会遍历数组的每一项。
*/

for(let item in array){
    console.log(item);
}

for(let item of array){
    console.log(item);
}

/**
 * 区别三：遍历其他可迭代对象(array, Map,Set,String,TypedArray,arguments),
 * for of 可以遍历可迭代对象，for in 不行
*/

let interAble = new Set([1,2,3,4,5,6,7,8,9,0])

for(let key of interAble){
    console.log('打印interAble的每一项 -- of',key);
}

for(let key in interAble){
    console.log('打印interAble的每一项 -- in',key);   // 不会打印
}

/**
 *  区别四：for in 会输出原型的上的属性
*/

Object.prototype.add = 'add';
var Obj1 = { address : '中国',counter: 960};
for(let cur in Obj1){
    console.log('cur====',cur)
    if(Obj1.hasOwnProperty(cur)){
        console.log('属于自己的属性',cur)
    }
}