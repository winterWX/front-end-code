import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from "element-plus";
import "element-plus/theme-chalk/index.css";

createApp(App).use(router).use(store).use(Element).mount('#app');