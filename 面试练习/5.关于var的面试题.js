var f = true;
var b = 10

if(f = true){
    b = 20;
}

function fn(){
    var a = 12;
    c = 30;
}

fn();

console.log(a);  // a is not defined
console.log(b);  // 20
console.log(c);  // 30