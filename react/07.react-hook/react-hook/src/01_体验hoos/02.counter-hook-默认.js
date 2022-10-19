import React, { useState } from "react";

//  useState 本身是一个函数,来自react包
//  useState 的参数和返回值
//           参数：给创建出来的状态一个默认值
//             返回值：元素1  (当前state的值)
//                     元素2 (设置新值使用的一个函数)

const CounterCnp = () => {
     let arr = useState(0);
     let state = arr[0];
     let setState = arr[1]
     return (
          <div>
               <h1>当前计数:{state}</h1>
               <button onClick={e => { setState(state + 1) }}>加1</button>
               <button onClick={e => { setState(state - 1) }}>减1</button>
          </div>
     );
}

export default CounterCnp;