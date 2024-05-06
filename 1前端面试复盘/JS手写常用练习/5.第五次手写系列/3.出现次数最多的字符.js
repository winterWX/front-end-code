const str = 'werwerwerwerwerwersdf23423423'

const node = str.split('').reduce((a, b) => {
    return (a[b]++ || (a[b] = 1), a)
}, {})

console.log('node====', node) 