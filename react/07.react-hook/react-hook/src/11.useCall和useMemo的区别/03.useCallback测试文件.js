import React,{ useCallback, useState,useEffect} from 'react';

export default function TestUseCallback(){
    let [state, setState] = useState(0);
    const handleClick = ()=>{
        setState(state+1);
    }
    useEffect(() => {
        console.log("useEffect===useEffect", state)
    });

    const childFn = useCallback(()=>{
        console.log('callBack-state',state);
    });

    return (
        <div>
            <div>{ state }</div>
            <ChildComponent test={ childFn } />
            <button onClick={ handleClick }>点击</button>
        </div>
    )
};

//子组件
const ChildComponent = (props)=>{
    useEffect(()=>{
        props.test();
    })
    return <div>我是子组件</div>
}
