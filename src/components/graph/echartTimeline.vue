<template>
  <dv-border-box-12>
    <div class="chart-container">
      <div ref="chart" class="chart"></div>
      <echartsGraphs class="chart" :date="date"></echartsGraphs>
    </div>
  </dv-border-box-12>
</template>
<script setup>
import {ref, onMounted, defineProps, watch } from 'vue';
import * as echarts from 'echarts';
import echartsGraphs from "./graphs.vue";

const props = defineProps({
  date:{
    type:Array,
    required: true,
    default: ["1", "5"]
  }
})
const chart = ref(null);
const chartInstance = ref(null);

const option = {
  title: {
    text: `第1天~第${props.date[1]}天`,
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
      { value: "第1天", textStyle: { fontSize: 18 } },
      { value: "第2天", textStyle: { fontSize: 18 } },
      { value: "第3天", textStyle: { fontSize: 18 } },
      { value: "第4天", textStyle: { fontSize: 18 } },
      { value: "第5天", textStyle: { fontSize: 18 } }
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

watch(() => props.date, (newDate) => {
  const start = parseInt(newDate[0]);
  const xData = [];
  // 生成连续5天的day标签（包含起始和结束日期）
  for (let i = start; i <start + 5; i++) {
    xData.push({ value: `第${i}天`, textStyle: { fontSize: 18 } });
  }
  option.xAxis[0].data = xData;
  
  // 更新标题显示范围
  option.title.text = `第${start}天~第${start+4}天`;
  
  // 重新渲染图表
  if (chartInstance.value) {
    chartInstance.value.setOption(option);
  }
})
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