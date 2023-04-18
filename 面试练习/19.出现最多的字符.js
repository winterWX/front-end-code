const str = 'adfasdfsdfadswretertwetasdfasd35634563456345634563456345666666666666666'

const lastStr = str.split('').reduce((a, b) => {
    return (a[b]++ || (a[b] = 1), a)
}, {})

console.log('lastStr==', lastStr)