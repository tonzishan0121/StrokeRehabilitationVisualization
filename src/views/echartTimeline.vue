<template>
  <dv-border-box-12>
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
      <div class="chart"><echartsGraphs/></div>
    </div>
  </dv-border-box-12>
</template>
<script setup>
import {ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import echartsGraphs from './graphs.vue';


const chart = ref(null);
const chartInstance = ref(null);

console.log(echartsGraphs);
const option = {
  title: {
    text: '2024-1-1~2024-1-5',
    textStyle: {
      color: '#FFF',
      fontSize: 20,
    }
  },
  tooltip: {},
  grid: {
    left: '1%',
    right: '1%',
    bottom: '10%',
    top: '10%',
    containLabel: false,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: ["1-1", "1-2", "1-3", "1-4", "1-5"],
      position: 'bottom',
      axisLine: {
        symbol: ['none', 'arrow'],
        lineStyle: { color: '#FFF' }
      },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: { type: 'dotted', color: '#FFF', opacity: 0.5 }
      },
      axisLabel: { color: '#FFF' }
    },
    {
      type: 'value',
      show: true,
      boundaryGap: false,
      max: 100,
      min: 0,
      position: 'top',
      axisLine: {
        symbol: 'none',
        lineStyle: { color: '#FFF', opacity: 0.5 }
      },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false }
    }
  ],
  yAxis: {
    type: 'value',
    max: 100,
    min: 0,
    show: false
  },
  series: [
    {
      type: 'line',
      markLine: {
        label: {
          show: true,
          position: 'insideEndBottom',
          formatter: '出院',
          color: 'red',
          fontSize: 20
        },
        data: [
          {
            xAxis: 0,
            yAxis: 50,
            lineStyle: {
              color: '#FFF',
              type: 'dashed',
              opacity: 0.5,
            }
          },
          {
            xAxis: 100,
            yAxis: 50,
            lineStyle: {
              color: '#FFF',
              type: 'dashed',
              opacity: 0.5
            }
          }
        ]
      }
    }
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


<style lang="css" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.chart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>