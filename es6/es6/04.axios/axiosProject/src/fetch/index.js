
let controller;
const testFn = async ()=>{
    controller && controller.abort()
    controller = new AbortController()
    const data = await fetch('http://localhost:8080/api',{
        signal: controller.signal
    }).then(res=>{
        console.log('res',res)
    })
}