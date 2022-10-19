import React, { useState, useCallback } from 'react';

const UseCallbackCnp = () => {
     const [state, setstate] = useState(0)

     const increment = () => {
          setstate(state + 1);
          console.log('计数加一的操作');
     }

     const subCremnt = useCallback(
          () => {
               setstate(state - 1);
               console.log('计数加一的操作');
          },
          [state],  //必须传入依赖，否则一直引用的是初始值，相当于一个闭包
     )
     return (
          <div>
               <h1>当前计数{state}</h1>
               <button onClick={increment}>当前计数加1</button>
               <button onClick={subCremnt}>当前计数减1</button>
          </div>
     )
}

export default UseCallbackCnp;