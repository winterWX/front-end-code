function foo(){}

type fnType = () => void;

function bar(fn:fnType){
    fn();
}

bar(foo);

type FunType = (um1: number, num2: number)=> number;

const addNum:FunType = (num1: number, num2: number)=>{
    return num1 + num2
}