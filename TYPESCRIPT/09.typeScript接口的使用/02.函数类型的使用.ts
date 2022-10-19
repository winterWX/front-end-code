
type FnType = (num1: number, num2: number) => number

function addNum(num1: number, num2: number, calcFn: FnType){
    calcFn(num1,num2);
}

const add: FnType = (num1,num2)=>{
    return num1 + num2
}

addNum(20,40,add);