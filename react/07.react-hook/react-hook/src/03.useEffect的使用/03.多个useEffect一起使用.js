import React, { useEffect, useState } from 'react';

const MoreUseEffect = () => {
     // 当依赖值发生变化时，useEffect会触发
     const [state, setstate] = useState(0)
     useEffect(() => {
          console.log('修改Dom')
     }, [state])

     useEffect(() => {
          console.log('取消订阅')
     }, [])

     useEffect(() => {
          console.log('网络请求')
     }, [])

     return <div></div>;
}


export default MoreUseEffect;