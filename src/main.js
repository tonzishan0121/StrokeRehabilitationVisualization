import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
//引入echart
//4.x 引用方式
import echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(dataV);
app.use(router);
app.mount('#app');