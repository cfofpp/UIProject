import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/global.css'
// 新增代码：引入全部组件及样式
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'




import * as echarts from 'echarts'
import Axios from 'axios'
// Axios.defaults.baseURL="http://service-beta.csladmin.shippingmax.net/api/v1/"
Axios.defaults.baseURL="http://127.0.0.1"


let app=createApp(App)
app.config.globalProperties.$http=Axios; 
app.config.globalProperties.echarts=echarts; 
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')



