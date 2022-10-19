import React from 'react';
import ReactDOM from 'react-dom';
import StoreContext from './myTestPage/reduxComponent/utils/context';
import store from "./myTestPage/reduxComponent/store/index"
import 'antd/dist/antd.css'
import '../src/css/index.css'
import '../src/16_React动画的应用/transition.css'

//import App from './01_组件的定义方式/App';
//import App from './02_render的返回值/App'
//import App from './03_render组件的生命周期/App'

//import App from './04_组件间的通信/01_父传子类组件及类型验证'
//import App from './04_组件间的通信/02_父传子函数组件及类型验证'
//import App from './05_React模仿Vue实现slot/01_常规方法的实现'
//import App from './05_React模仿Vue实现slot/02_传递属性的实现'

//import App from './06_跨组件的通讯/01_跨组建的通讯-context-类组件'
//import App from './06_跨组件的通讯/02_跨组建的通讯-context-函数组件'
//import App from './07_setState的使用/02_setState是异步更新'
//import App from './07_setState的使用/03_setState同步更新'
//import App from './07_setState的使用/05_setState的合并'
//import App from './08_React的性能优化/04_shouldComponent的用法'

//import App from './08_React的性能优化/05.puerComponent的用法'
//import App from './09_前面知识的补充/01.setState的不可变力量'
//import App from './10_全局的事件传递/01_全局事件'
//import App from './11_受控组件和非受控组件/01_ref的使用'
//import App from './11_受控组件和非受控组件/02_受控组件'

//import App from './12_高阶组件的使用/01_高阶组件的定义方式'
//import App from './12_高阶组件的使用/02_高阶组件的应用-增强props-默认'
//import App from './12_高阶组件的使用/03_高阶组件的应用-增强props'
//import App from './12_高阶组件的使用/04_高阶组件-鉴权做法'

//import App from './15_react组件内容补充/01.ref的转发'
//import App from './15_react组件内容补充/02.protals的用法'

//import App from './16_React动画的应用/CSStransitionDom'
//import App from './16_React动画的应用/SwitchTransitionDom'
//import App from './16_React动画的应用/TransitionGroupDom'
//import App from './16_React动画的应用/TransitionGroupDom'

//redux
//import App from './14_redux/01_redux的使用'

//练习组件
// import App from './myTestPage/组件间的传值'
// import App from './myTestPage/跨组件传值.js'
// import App from './myTestPage/全局事件.js'
// import App from './myTestPage/ref的转发.js'

// redux 练习
// import App from './myTestPage/reduxComponent/index'


//this 绑定的问题

import App from './17_this绑定的/index'

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App title='title' />
    </StoreContext.Provider>
    ,document.getElementById('root')
);

