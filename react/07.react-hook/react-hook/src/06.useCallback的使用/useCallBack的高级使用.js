import React, { useState, useCallback, memo } from 'react';
// useCallback的使用场景：
// 1.将一个组件中的函数传给子元素进行调用时，使用useCallback对函数进行处理
const HYNButtom = memo((props) => {
     console.log('组件会重新渲染' + props.title);
     return (<div><button onClick={props.increment}>加一</button></div>)})

const UseCallbackCnp = () => {
     const [state, setstate] = useState(0);
     const [isshow, setshow] = useState(true);
     // 始终是一个新的值,所以当memo进行性能优化的时候 上次和本次不一样，就会渲染
     const increment = () => { setstate(state + 1)}
     // 当依赖不发生变化时，一直是同一个值，所以当memo进行性能优化的时候 上次和本次一样，就不会渲染
     const subCremnt = useCallback(() => {
               setstate(state - 1);
          },[state])  //必须传入依赖，否则一直引用的是初始值，相当于一个闭包
     return (
          <div>
               <h1>当前计数{state}</h1>
               <HYNButtom title="btn1" increment={increment} />
               <HYNButtom title="btn2" increment={subCremnt} />
               <button onClick={e => setshow(!isshow)}>转变</button>
          </div>
     )}
export default UseCallbackCnp;