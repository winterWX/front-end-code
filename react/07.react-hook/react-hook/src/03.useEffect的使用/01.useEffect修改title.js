import React, { useState, useEffect } from 'react';

const HookChangeTitle = () => {
     const [state, setstate] = useState(0);
     /***
      *  1.useEffect 只有一个参数（函数）相当于两个钩子函数 
      *  componmentDidmount 和 componmentDidUpdate,componentWillUnmount的结合  
      *  2.useEffect 是在组件render渲染完成后执行的
      *  3.每次执行时都会创建一个新的函数作为参数传入，创建的函数能拿到最新state
      *
     */

     // 只有一个函数作为参数时，相当于 componmentDidmount 和 componmentDidUpdate 生命周期
     useEffect(()=>{

     })

     // componmentDidmount 时触发
     useEffect(()=>{

     },[])

     // componmentDidmount 时触发
     useEffect(()=>{
          // 相当于 componentWillUnmount
          return ()=>{

          }
     },[])

     useEffect(() => {
          document.title = state;
     })

     return (<div>
          <h1>当前计数：{state}</h1>
          <button onClick={e => { setstate(state + 1) }}>增加数据</button>
     </div>)
}


export default HookChangeTitle;