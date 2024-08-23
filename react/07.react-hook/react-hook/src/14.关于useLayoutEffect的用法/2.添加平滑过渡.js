import React,{ 
    useRef, 
    useEffect,
    useLayoutEffect 
} from 'react';
// 使用场景一 添加平滑过渡

const TestUseLayoutEffect = ()=>{
    const style = {
        height: '18000px',
        overflow: 'scroll'
    }
    const getDom = useRef();
    useLayoutEffect(() => {
        const container = getDom.current;
        const handleAnimation = ()=>{
            container.scrollTo({
                bottom: 200,
                behavior: 'smooth'
            });
        }
        window.addEventListener('scroll', handleAnimation)
        return () => {
            window.removeEventListener('scroll', handleAnimation)
        }
    },[])
    return (
        <div style={ style } ref={getDom}>
            <div>测试UseLayoutEffect的功能</div>
        </div>
    )
}

export default TestUseLayoutEffect