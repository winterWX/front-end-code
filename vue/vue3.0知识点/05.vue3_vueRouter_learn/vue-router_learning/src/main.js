import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');


/***
 *
 *  此项目练习的知识点 vue3
 *  1. vue-router的实现
 *  2. vuex的实现
 *  3. 自定指令
 *  4. teleport
 *  5. nextTick 的用法
 *  6. 路由守卫
 * 
 */