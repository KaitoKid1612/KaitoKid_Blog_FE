import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Menu, List, Drawer, Button, message } from 'ant-design-vue';
import router from './router/index.js'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import './static/fontawesome-free-6.3.0-web/css/all.min.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(createPinia())
app.mount('#app');

app.config.globalProperties.$message = message;