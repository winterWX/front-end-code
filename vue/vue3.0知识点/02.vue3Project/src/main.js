import { createApp } from 'vue'
import App from './App.vue'
import PackUi from "pack-page-ui"

const init = createApp(App);
init.mixin({
	data(){
		return{
			appData: 'app',
			all: 100
		}
	},
	created(){
		console.log('PackUi===',PackUi)
	}
})
init.use(PackUi)
init.mount('#app')

