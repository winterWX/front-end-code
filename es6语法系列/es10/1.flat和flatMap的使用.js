/**
 *   flat：对多维数组进行降维处理
 * 
*/

const arr = [[12,3,4,5],[2,3],[2,3]]

console.log(arr.flat())  // flat() 是可以传入值的，默认值是1


/**  flatMap  是同个某个操作 将数据分割成多维数组，再进行降维 */
 
const str = ['i am bu lu si','hello world']

const lastStr = str.flatMap(item=>{
    console.log(item,item.split(' '),[12,32].join(','))
    return item.split(' ')  // 将字符串分割成数组 [[i,am,bu,lu,si],[hello,world]]
    // split 操作字符串- 变数组， join操作数组 - 变字符串
},/** 第二个参数是绑定this */)

console.log('lastStr===',lastStr)
