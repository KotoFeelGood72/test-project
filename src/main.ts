import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import pluginPersistence from 'pinia-plugin-persistence'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(pluginPersistence)

app.use(pinia)
app.use(router)
app.use(naive)

app.mount('#app')
