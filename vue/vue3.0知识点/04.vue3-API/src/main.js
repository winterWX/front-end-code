import { createApp } from 'vue'
import App from './App.vue'

const init = createApp( App  // App 做为根组件
)
init.mount('#app')

// 1.可以创建多个根组件
const init2 = createApp(
    App
)
init2.mount(/** 根节点 */)


// 2.可以设置全局的  config
init.config.errorHandler = function(){}

// 3.可以创建全局的  组件 component
init.component(/** 组件名 */    /** 对应的组件 */)



/**
 * 
 * 
 * 
//  * vue:是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面

//         # 应用配置

//         应用示例会暴露一个 .config对象，允许我们配置一些应用级的选项

//         app.config   // 可以配置捕获组件错误的方法
//         app.component 注册全局组件
//         vue 允许有多个实例存在

//         # 动态多属性绑定

//         const init ={
//             name: 'li'
//             age: 18
//         }
//         <span v-bind="init"></span>


//         # 响应式对象

//         const raw = {}
//         const proxy = reactive(raw)

//         // 代理对象和原始对象不是全等的
//         console.log(proxy === raw) // false


//         // 在同一个对象上调用 reactive() 会返回相同的代理
//         console.log(reactive(raw) === proxy) // true

//         // 在一个代理上调用 reactive() 会返回它自己
//         console.log(reactive(proxy) === proxy) // true

 * 
 * 
 */
