Array.prototype.myPush = function (){
    let arg = this;
    if(!Array.isArray(arg)) throw error('不是一个数组');
    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }
};

let arr = [];
arr.myPush(23,12);
console.log('arr====',arr);



