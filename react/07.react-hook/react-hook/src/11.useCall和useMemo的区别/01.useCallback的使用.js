/**
 * 使用场景
 * 
 * 有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，
 * 如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
 * 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新。
 * 
*/

import React, { useState, useCallback, useEffect } from 'react';

export default function Parent() {
    
    const [count, setCount] = useState(1);
    
    const [val, setVal] = useState('');
  
    const callback = useCallback(() => {
         return count;
    }, [count]);

    return (
        <div>
            <h4>{count}</h4>
            <Child callback={callback}/>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <input value={val} onChange={event => setVal(event.target.value)}/>
            </div>
        </div>
    )
       
 }
  
 function Child({ callback }) {

    const [count, setCount] = useState(() => callback());

    useEffect(() => {
         setCount(callback());
    }, [callback]);

    return <div>
         {count}
    </div>

 }