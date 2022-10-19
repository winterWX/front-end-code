import React, { useState, useEffect } from 'react';

const HookChangeTitle = () => {
     const [state, setstate] = useState(0);

     // 相当于两个钩子函数 componmentDidmount 和 和componmentDidUpdate
     //  render 执行完就会执行 useEffect

     useEffect(() => {
          console.log('订阅事件-------');
          return () => {   //componmentWillUnmont 相当于
               console.log('取消订阅事件');
          }
     }, [])

     return (<div>
          <h1>当前计数：{state}</h1>
          <button onClick={e => { setstate(state + 1) }}>增加数据</button>
     </div>)
}


export default HookChangeTitle;