
let dataArray = [
    [120,30,40,50,60,60,70,80,890],
    [112,13,14,15,16,16,17,18,189],
    [122,32,42,52,62,62,72,82,892],
    [123,33,43,53,63,63,73,83,893],
    [234,34,44,54,34,64,74,34,94]
]

// 顺时针打印数组矩阵
function arrayShow(array){
   let arr = [];
   if(!array.length) return arr
   let top= 0,bom=array.length-1,left=0,right=array[0].length-1;
   while(top <=bom && left <=right){
        for(let i=left; i<=right; i++) arr.push(array[top][i])  //从左到右
        top++
        if(top > bom) break

        for(let i= top; i<=bom; i++) arr.push(array[i][right])  //从上到下
        right--
        if(right < left) break

        for(let i = right; i >=left; i--) arr.push(array[bom][i]) //从右向左
        bom--
        if(bom < top) break

        for(let i = bom; i >= top; i--) arr.push(array[i][left])  //从下向上
        left++
        if(left > right) break
   }

   return arr
}

console.log('=====',arrayShow(dataArray));
