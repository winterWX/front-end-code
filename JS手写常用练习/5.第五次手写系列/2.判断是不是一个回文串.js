let num = '12abba21'

function strChange(num) {
    const isShow = (s) => (s >= 'a' || s <= 'z') || (s >= 0 || s <= 9)
    let i = 0;
    let j = num.length - 1
    while (j >= i) {
        let left = num[i].toLowerCase()
        let right = num[j].toLowerCase()
        if (!isShow(left)) {
            i++
        } else if (!isShow(right)) {
            j--
        } else if (left === right) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
}

console.log('result===', strChange(num))