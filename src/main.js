import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
//引入echart
import * as echarts from 'echarts'
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(dataV);
app.use(router);
app.mount('#app');