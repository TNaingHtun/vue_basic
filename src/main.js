import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import Footer from "../src/components/Footer.vue"

import './assets/main.css'

const app = createApp(App)

app.component("Footer", Footer)
app.use(router)

app.mount('#app')