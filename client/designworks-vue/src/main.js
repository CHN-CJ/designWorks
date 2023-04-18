import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as Icons from '@element-plus/icons-vue'
import store from './vuex/store.js'

const app = createApp(App)
app.use(ElementPlus)
for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(store)

app.use(router).mount('#app')

