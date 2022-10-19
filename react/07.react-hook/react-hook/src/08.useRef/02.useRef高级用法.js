import React, { useRef, useState, useEffect } from 'react';

// 可以给useRef给默认值
const UseRefAdvancedUsage = () => {
     const [state, setstate] = useState(0);
     const defaultValue = useRef(state);

     useEffect(() => {
          defaultValue.current = state;
     }, [state]);

     const getHtmlValue = () => {
          setstate(state + 100)
     }
     
     return <>
          <h2>我是useRef.current: {defaultValue.current}</h2>
          <h2>我是state: {state}</h2>
          <button onClick={e => { getHtmlValue() }}>点击获取值</button>
     </>;
}

export default UseRefAdvancedUsage;