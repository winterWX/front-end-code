import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui'

createApp(App)
.use(Element)
.use(router)
.use(store)
.mount('#app');