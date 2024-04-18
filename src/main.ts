import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import App from './App.vue'
import router from './router'
import piniaPlufinPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 使用数据持久化插件
pinia.use(piniaPlufinPersistedstate)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
