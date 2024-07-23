// 利用闭包劫持变量 没有块儿级作用域时
for(var i = 0; i < 5; i++) {
    (function(i){
        setTimeout(function timer() {
            console.log(i);
        }, i * 500);
    }(i));
}