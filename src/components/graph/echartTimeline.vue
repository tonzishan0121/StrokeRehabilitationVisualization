<template>
  <dv-border-box-12>
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
      <echartsGraphs class="chart"></echartsGraphs>
    </div>
  </dv-border-box-12>
</template>
<script setup>
import {ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
import echartsGraphs from "./graphs.vue";
const chart = ref(null);
const chartInstance = ref(null);

const option = {
  title: {
    text: `治疗与评估路径可视化`,
    textStyle: {
      color: '#FFF',
      fontSize: 22
    },
    left: 20,
    top: 18
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
      data: [  // 修改数据项格式
      { value: "入院", textStyle: { fontSize: 18 } },
      { value: "中期", textStyle: { fontSize: 18 } },
      { value: "出院", textStyle: { fontSize: 18 } }
    ],
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