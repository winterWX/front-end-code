Function.prototype.wxBind = function (thisArg, ...arg) {
    thisArg = thisArg ? Object(thisArg) : window
    let fn = this
    thisArg.fn = fn
    return (...res) => {
        let result = thisArg.fn({ ...arg, ...res })
        delete thisArg.fn
        return result
    }
}

function foo(obj) {
    console.log('obj===', this, obj)
}

let callbackValue = foo.wxBind({ name: 'wx', age: 20 }, 223, 34, 45, 6)

callbackValue(23423, 464, 56, 5765)