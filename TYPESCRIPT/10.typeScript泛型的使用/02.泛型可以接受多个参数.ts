
//可以传递多个
function dataChange<T,S>(num1: T, num2: S){
    return num1+'' + num2 
}  

dataChange<number,string>(10,'nihao')