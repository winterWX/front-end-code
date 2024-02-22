Array.prototype.map = function(fn){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        const r = fn(this[i], i, arr);
        newArr[newArr.length]= r;
    }
    return newArr;
}

arr = [8,5,7,9];

let nodeData = arr.map(function(item){ return item*2 });

console.log('nodeData===', nodeData)






