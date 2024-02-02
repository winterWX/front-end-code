import React, { useState } from 'react';

const CounterCnp = () => {
     let [state, setState] = useState(0);
     const setStateChange =()=>{
          setState((prev) => prev + 10)  // 可以传入一个函数
     }
     return (
          <div>
               <h1>当前计数:{ state }</h1>
               <button onClick={e => { setState(state + 1) }}>加1</button>
               <button onClick={e => { setState(state - 1) }}>减1</button>
               <button onClick={()=> setStateChange() }>减1</button>
          </div>
     )
}


export default CounterCnp;