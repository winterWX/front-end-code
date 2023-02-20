function foo(x){
    x = x + 1
    return function(y){
        y = y * 2
        return function(z){
            z = z * 10
            return x + y + z
        }
    }
}

console.log(foo(1)(2)(3))

// 每一步完成单数一的逻辑