import { createApp } from 'vue';
import registerDirective from "./directives"

//import App from './App.vue'

// import App from './component/01.自定义指令/01.默认方式实现聚焦.vue'
// import App from './component/01.自定义指令/02.自定义指令实现聚焦.vue'
// import App from "./component/01.自定义指令/03.自定义指令实现时间戳.vue"
// import App from "./component/01.自定义指令/04.试用全局自定义指令.vue"
// import App from "./component/02.teleprot/index.vue"
   import App from "./component/01.自定义指令/05.自定义实现数字分割.vue"
   
const app = createApp(App);

registerDirective(app);

// 全局自定义指令
app.directive('focus', {
	mounted(el,bindings,Vnode,preVnode){
		el.focus();
	}
})

app.mount('#app')

// 自定义全局指令