function gen(generatorFn) {
    const fn = generatorFn()
    function excut(res) {
        let result = fn.next(res)
        if (result.done) {
            return result.value
        }else{
            result.value.then(res => {
                excut(res)
            })
        }
    } 
    excut()
}




