/**
 *  对象的操作方法
*/


/** 判断一个对象是否为空 */

let data = {};

// 方法一

if(JSON.stringify(data) === '{}'){
    console.log('对象为空')
}

// 方法二
if(Object.keys(data).length == 0){
    console.log('对象为空')
}

// 方法三
function objFn(){
    for(let item in data){
        return true
    }
    return false
}

console.log('判断对象是否为空',Object.getOwnPropertyNames(data).length);

