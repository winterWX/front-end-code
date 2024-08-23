
// 1.useLayoutEffect 在渲染之后但在浏览器绘制屏幕之前运行, 执行依赖于布局的副作用
// 2.useLayoutEffect 是同步加载, 存在隐患可以会造成阻塞
// 3.useEffect 是异步加载(render之后加载), 非阻塞

import React,{ useLayoutEffect } from 'react';

const TestUseLayoutEffect = ()=>{
    useLayoutEffect(() => {
            return () => {},
        []
    })
    return(
        <div>我是useEffect</div>
    )
}

export default TestUseLayoutEffect