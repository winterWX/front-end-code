
const arr1 = [12,34,45,6,7,8,9,5,6,8,10]

// console.log(arr1.sort((x,y)=> x-y))
console.log(Math.max.call(null,arr1))

// 一共9个数组索引从0开始到8；
var arr = [43, 64, 23, 76, 23, 66, 54, 85, 24];
// 每一趟决定一个最大的数并放到最后
// 第一个for循环管趟数
for (var i = 0; i <= arr.length - 1; i++) {
    //  内层循环保证每一趟最后一个数最大
    // 第一趟时arr.length - 1 - i=7；而i从0开始所以走了8次
    for (var j = 0; j <= arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
// 第二趟i=2第二趟走7次就可以决定倒数第二个数的最大值