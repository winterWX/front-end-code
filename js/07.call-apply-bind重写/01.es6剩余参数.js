// rest parameter  (剩余参数)
function num(...res){   // res 是一个数组类型
    console.log(res) 
    // [ 10 ]
    // [ 10, 23]
} 

num(10)
num(10,23)