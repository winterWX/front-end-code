let arr1 = [12, 43, 45654, 76, 12, 12, 3, 34, 5, 5, 78, 78]
let arr2 = [12, 43, 45654, 76, 12, 12, 3, 34, 5, 5, 78, 78]

let newCode = [...arr2, ...arr1]
let last = newCode.reduce((pre, cur) => {
    return
}, [])

