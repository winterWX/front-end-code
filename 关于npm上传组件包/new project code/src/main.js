import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import pigButton from 'pig-button'

const root = createApp(App).mount('#app')
root.use(pigButton)
root.mount('#app')

