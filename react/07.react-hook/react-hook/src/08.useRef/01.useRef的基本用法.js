import React, { PureComponent, useRef } from 'react';

class ChildrenCnp extends PureComponent {
     render() {
          return <div>
               <h2>I AM 组件ChildrenCnp</h2>
          </div>
     }
}

const UseRefDefault = () => {

     const textContent = useRef();
     const getComponent = useRef();

     const getValueContent = () => {
          console.log('获取H2标签的内容', textContent.current.innerHTML);
          console.log('获取组件实例对象', getComponent.current)
     }

     return (<div>
          <h2 ref={textContent}>获取UseRef的标签内容</h2>
          {/* 获取一个组件的实例对象 */}
          <ChildrenCnp ref={getComponent} />
          <div><button onClick={e => { getValueContent() }}>点击获取内容</button></div>
     </div>);
}

export default UseRefDefault;