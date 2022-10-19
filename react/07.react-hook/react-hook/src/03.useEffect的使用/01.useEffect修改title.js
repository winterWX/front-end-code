import React, { useState, useEffect } from 'react';

const HookChangeTitle = () => {
     const [state, setstate] = useState(0);

     // 相当于两个钩子函数 componmentDidmount 和 componmentDidUpdate
     useEffect(() => {
          document.title = state;
     })

     return (<div>
          <h1>当前计数：{state}</h1>
          <button onClick={e => { setstate(state + 1) }}>增加数据</button>
     </div>)
}


export default HookChangeTitle;