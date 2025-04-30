<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import adjustedData from '../../store/data.json'; 

const chart = ref(null);
const chartInstance = ref(null);

let commonSeriesConfig = { 
  type: 'graph',
  layout: 'force',
  layoutAnimation: true,
  roam:'scale',
  label: {
    show: true,
    color: "inherit",
    position: "bottom",
    fontSize: 12
  },
  force: {
      repulsion: 100,
      edgeLength: 12,
      gravity: 0.05
    },
  itemStyle: {
    borderColor: '#fff',
    borderWidth: 1,
    shadowBlur: 10,
    shadowColor: "white"
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

const series_template = [];

for (let i = 1; ; i++) {
  const dayData = adjustedData[`day${i}`];
  if (!dayData) {
    break; // 如果没有对应的 day 数据，退出循环
  }
  const leftIndex = (i - 1) * 20;
  const rightIndex = (i - 1) * 20 + 10;
  series_template.push(graph_template(`${leftIndex}%`, `${100 - rightIndex}%`, dayData.left));
  series_template.push(graph_template(`${rightIndex}%`, `${90 - leftIndex}%`, dayData.right));
}


const option = {
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    top: '5%',
    containLabel: true,
  },
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
<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>