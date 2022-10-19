import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const CnpComponent = forwardRef((props, ref) => {
     const inputRef = useRef();
     //对子组件的属性进行有限的暴露
     useImperativeHandle(
          ref,
          () => ({
               focus: () => {
                    inputRef.current.focus()
               },
               getHtml: () => {
                    inputRef.current.value = "手动填写"
               }
          }),
          [inputRef.current],
     )

     return (
          <div>
               <input ref={inputRef} />
          </div>
     )
})


const UseImperativeHandleDemo = () => {
     const childernFouce = useRef();

     const getInputFouce = () => {
          childernFouce.current.focus();
          childernFouce.current.getHtml();
          // childernFouce.current.value = "手动填写"
     }

     return <>
          <div style={{ margin: '40px' }}>
               <h2>让子组件聚焦</h2>
               <CnpComponent ref={childernFouce} />
               <button onClick={e => { getInputFouce() }}>点击按钮让input聚焦</button>
          </div>
     </>;
}



export default UseImperativeHandleDemo;