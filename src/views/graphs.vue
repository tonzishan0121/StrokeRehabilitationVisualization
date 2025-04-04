<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import adjustedData from '../utils/data.json'; 

const chart = ref(null);
const chartInstance = ref(null);

let commonSeriesConfig = { 
  type: 'graph',
  layout: 'force',
  layoutAnimation: true,
  roam:'scale',
  label: {
    normal: {
      show: true,
      color: "inherit",
      position: "bottom",
      fontSize: 12
    },
    force: {
      gravity: 0.3,
      edgeLength: 40
    }
  },
  itemStyle: {
    normal: {
      borderColor: '#fff',
      borderWidth: 1,
      shadowBlur: 10,
      shadowColor: "white"
    }
  },
  scaleLimit: { max: 2, min: 0.5 },
  draggable: true
  };

const graph_template=(left,right,data)=>{

  return {
    ...commonSeriesConfig,
    nodes: data.nodes,
    links: data.links,
    left: left, top: '0%', right: right,bottom: '0%'
  }
}

const data1=adjustedData.day1;
const data2=adjustedData.day2;
const data3=adjustedData.day3;
const data4=adjustedData.day4;
const data5=adjustedData.day5;

const series_template = [
  graph_template('0%','80%',data1),
  graph_template('20%','60%',data2),
  graph_template('40%','40%',data3),
  graph_template('60%','20%',data4),
  graph_template('80%','0%',data5)
]


const option = {
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
    top: '10%',
    containLabel: true,
  },

  tooltip: {},

  series: series_template
};

// 初始化echarts实例的函数
const initChart = () => {
if (chartInstance.value == null && chart.value != null) {
  chartInstance.value = echarts.init(chart.value);
  option && chartInstance.value.setOption(option);
}
};

// 在组件挂载后调用初始化函数
onMounted(() => {
  initChart();
});
</script>