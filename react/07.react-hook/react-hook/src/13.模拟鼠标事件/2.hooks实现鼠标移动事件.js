import React,{ useState, useEffect} from "react"

function MouseMoveFn(){
    console.log('111')
    let [state, setState] = useState({ x:0, y:0 })
    const tractionMove = (e)=>{
        console.log('222')
        setState(state => ({ ...state, x: e.pageX, y: e.pageY }))
    }
    useEffect(()=>{
        console.log('333') 
        window.addEventListener('mousemove',tractionMove)
        return ()=>{
            console.log('444')
            window.removeEventListener('mousemove',tractionMove)
        }
    })
    console.log('5555')
    return (<div>
        {state.x}-{state.y}
    </div>)
}

export default MouseMoveFn