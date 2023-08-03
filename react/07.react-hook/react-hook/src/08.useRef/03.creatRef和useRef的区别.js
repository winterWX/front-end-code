

区别
0. createRef适用于类组件，useRef适用于函数组件。
1. createRef 创建的对象，赋值给ref属性，通过这个对象可以获取到节点对象的属性和方法。
2. useRef会返回一个可变的ref对象，.current会被当做初始值。.current上可以存储信息，赋值给节点ref属性时
会将节点信息存放到.current对象上
3. useRef始终返回同一个对象, 当节点信息变更了, 只会变更.currnet属性, 变更.current 属性不会引发组件重新渲染.useRef也不会进行通知.


