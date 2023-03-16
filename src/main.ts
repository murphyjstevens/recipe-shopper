import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').filter(value => value).length
  const fromDepth = from.path.split('/').filter(value => value).length
  to.meta.transition = toDepth < fromDepth ? 'router-view-back' : 'router-view'
})
app.use(router)

app.mount('#app')
