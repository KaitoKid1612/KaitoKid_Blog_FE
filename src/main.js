import { createApp } from 'vue'
import { Drawer, Button, message } from 'ant-design-vue';
import router from './router/index.js'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.mount('#app');

app.config.globalProperties.$message = message;