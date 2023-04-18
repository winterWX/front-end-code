let obj = { title: '9999' }

function test(obj, key) {
    return key in obj
}

console.log(test(obj, 'title'))