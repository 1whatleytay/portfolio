import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import VueFeather from 'vue-feather'

import './index.css'

const app = createApp(App)

app.use(router)
app.component('vue-feather', VueFeather)

app.mount('#app')
