import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mixin({
	data(){
		return{
			appData: 'app',
			all: 100
		}
	}
}).mount('#app')

// const app = createApp(App);

// app