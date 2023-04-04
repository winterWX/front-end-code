let num = 100000000
function division(num,flag){
    flag = flag || 3
    let len = num % 3 === 0 ? num % 3 : Math.floor(num % 3) + 1
    console.log(len)
}
division(num,null)