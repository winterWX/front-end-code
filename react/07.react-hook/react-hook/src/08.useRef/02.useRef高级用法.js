import React, { useRef, useState, useEffect } from 'react';

// 可以给useRef给默认值

/***
 *   useRef创建的对象
 *   1.对象的引用永远是相同的
 *   2.对象.current想当于一个黑盒子，可以存储东西
 * 
 * 
 *   下面案例： 
 *    组件首次渲染，ref.current的值是0
 *    当setState改变state后页面进行渲染，渲染完后执行useEffect给ref.current赋值
 *    所以在页面上的表现依然是初始值， 其实在内存里已经变了，
 * 
 *    第二次state改变时, 渲染完后执行useEffect,ref.current首先会拿内存里上次的值，
 *    最新的值又会被保存在内存里。
 */


const UseRefAdvancedUsage = () => {
     const [state, setState] = useState(0);
     const ref = useRef(state);

     useEffect(() => {
          ref.current = state;
     }, [state]);

     const getHtmlValue = () => {
          setState(state + 100)
     }
     
     return <div>
          <h2>我是useRef.current: {ref.current}</h2>
          <h2>我是state: {state}</h2>
          <button onClick={e => { getHtmlValue() }}>点击获取值</button>
     </div>;
}

export default UseRefAdvancedUsage;