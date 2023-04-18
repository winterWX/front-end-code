function deepClone(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}


let obj = {
    a: '1',
    b: function () { }
    // n: new Date().getTime()
}

console.log('objNew', deepClone(obj).then(res => {
    console.log('res===', res)
}))