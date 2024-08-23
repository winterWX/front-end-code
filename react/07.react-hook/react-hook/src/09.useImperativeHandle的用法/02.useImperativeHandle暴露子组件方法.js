import React,{ 
    useState, 
    useEffect, 
    useImperativeHandle,
    useRef,
    forwardRef
} from 'react';

const ParentComponent = ()=>{
    const getChildDom = useRef();
    const getChildEvent = ()=>{
        getChildDom.current.clickHandle();
    };
    
    useEffect(()=>{
        getChildDom.current.focus(); // 聚焦
        getChildDom.current.innerHtml(); // 聚焦
    },[]);

    return (
        <div>
            <div>
                <span>父组的方法</span>
                <button onClick={ getChildEvent }>点击是获取子组件暴露的方法</button>
            </div>
            <ChildrenComponent ref={ getChildDom }/>
        </div>
    )
};

const ChildrenComponent = forwardRef((props,ref)=>{
    const childDom = useRef();
    useImperativeHandle(ref,()=>({
        focus:()=>{
            childDom.current.focus();
        },
        innerHtml:()=>{
            childDom.current.value = 'wx';
        },
        clickHandle: ()=>{
            console.log('我是子组件的方法');
        }
    }));
    return (
        <>
            <div>子组件的content</div>
            <input ref={ childDom } />
        </>
    )
});

export default ParentComponent