import { createApp } from 'vue'
import App from './App.vue'
import CDUI from './index'

const app = createApp(App)

app.use(CDUI)
app.mount('#app')
