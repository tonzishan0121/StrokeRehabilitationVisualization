<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

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
    normal: {
      show: true,
      color: "inherit",
      position: "bottom",
      fontSize: 12
    },
    force: {
      repulsion: 100,
      edgeLength: 12,
      gravity: 0.05
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

const data1_left=adjustedData.day1.left;
const data1_right=adjustedData.day1.right;
const data2_left=adjustedData.day2.left;
const data2_right=adjustedData.day2.right;
const data3_left=adjustedData.day3.left;
const data3_right=adjustedData.day3.right;
const data4_left=adjustedData.day4.left;
const data4_right=adjustedData.day4.right;
const data5_left=adjustedData.day5.left;
const data5_right=adjustedData.day5.right;

const series_template = [
  graph_template('0%','90%',data1_left),
  graph_template('10%','80%',data1_right),
  graph_template('20%','70%',data2_left),
  graph_template('30%','60%',data2_right),
  graph_template('40%','50%',data3_left),
  graph_template('50%','40%',data3_right),
  graph_template('60%','30%',data4_left),
  graph_template('70%','20%',data4_right),
  graph_template('80%','10%',data5_left),
  graph_template('90%','0%',data5_right)
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