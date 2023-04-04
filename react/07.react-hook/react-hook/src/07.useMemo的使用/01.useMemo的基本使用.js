import React, { useState, useMemo } from 'react';

function counterVal(state) {
    console.log('---------变化---------');
     let toals = 0;
     for (let i = 1; i <= state; i++) {
          toals += i;
     }
     return toals
} 

// 进行性能优化当 state 没有发生变化时 不会进行计算

const UseMemoBase = () => {

     const [state, setstate] = useState(1);
     const [show, setShow] = useState(true)

     const toals = useMemo(()=>{
         return counterVal(state)
     },[state])

     return (
          <div>
               <div>显示值:{toals}</div>
               <button onClick={e => setstate(state + 1)}>增加</button>
               <button onClick={e => setShow(!show)}>切换</button>
          </div>
     );
}

export default UseMemoBase;