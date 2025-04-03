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
  force: {
    repulsion: 100,
    edgeLength: 50
  },
  roam:'scale',
  label: {
    normal: {
      show: true,
      color: "inherit",
      position: "left",
      fontSize: 8
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

const option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '10%',
    top: '10%',
    containLabel: true,
  },

  tooltip: {},

  series: [
    {
      ...commonSeriesConfig,
      nodes: adjustedData.day1.nodes,
      links: adjustedData.day1.links,
       left: 0, top: 0, right: '80%'
    },
    
  ]
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