import React, { useRef, useLayoutEffect } from 'react';

const AnimatingElements = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
	// 在挂载时为元素的不透明度设置动画
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 1000);

    return () => {
			// 组件卸载时清理动画
      element.style.opacity = 0;
    };
  }, []);

  return <div ref={elementRef}>Animate me!</div>;
};

export default AnimatingElements