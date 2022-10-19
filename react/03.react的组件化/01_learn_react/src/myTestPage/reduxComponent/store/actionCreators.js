import {
    addOne,
    addFive,
    subOne,
    subFive
} from './constans';

const addOneFun = (num)=>({
    type: addOne,
    conter: num
});

const addFiveFun = (num)=>({
    type: addFive,
    conter: num
});

const subOneFun = (num)=>({
    type: subOne,
    conter: num
});

const subFiveFun = (num)=>({
    type: subFive,
    conter: num
});

export{
    addOneFun,
    addFiveFun,
    subOneFun,
    subFiveFun
}