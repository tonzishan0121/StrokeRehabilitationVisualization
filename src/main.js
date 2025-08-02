import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
//引入echart
import * as echarts from 'echarts'
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (!id) {
    // 如果没有id参数，跳转到错误页面
  localStorage.setItem('id', Math.floor(Math.random() * 5) + 10000);
} else {
  localStorage.setItem('id', id);
}
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(dataV);
app.use(router);
app.mount('#app');
