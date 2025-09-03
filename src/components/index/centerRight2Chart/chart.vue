<template>
  <div ref="chartRef" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import * as echarts from 'echarts';

// 定义props
const props = defineProps({
  cdata: {
    type: Object,
    default: () => ({
      S5Q: 0,
      RASS: 0,
      MMASA: 0,
      MRCsum: 0,
      BBS_sit_to_stand: 0,
      BBS_standing: 0,
      BBS_sitting: 0,
      FOIS: 0
    })
  }
});

// 定义响应式数据
const chartRef = ref(null);
let myChart = null;

// 初始化图表
const initChart = () => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value);
    updateChart();
    
    // 监听窗口大小变化，重新绘制图表
    window.addEventListener('resize', myChart.resize);
  }
};

// 更新图表
const updateChart = () => {
  if (!myChart) return;
  
  const {patient_id, assessment_date, ...temp} = props.cdata;
  const data = Object.values(temp);
  // 雷达图配置
  const option = {
    title: {
      text: '',
      left: 'center',
      color: '#ffffff', // 修改标题颜色
      fontSize: 18, // 修改标题字体大小
      fontWeight: 'bold' // 修改标题字体粗细
    },
    tooltip: {},
    radar: {
      indicator: [
        { name: 'S5Q', max: 100 },
        { name: 'RASS', max: 100 },
        { name: 'MMASA ', max: 100 },
        { name: 'MRCsum ', max: 100 },
        { name: 'BBS sit-to-stand', max: 100 },
        { name: 'BBS standing', max: 100 },
        { name: 'BBS sitting', max: 100 },
        { name: 'FOIS', max: 100 }
      ],
      axisName: {
        color: '#ffffff', // 修改指示器名称颜色
        fontSize: 16 // 修改指示器名称大小
      }
    },
    series: [
      {
        name: '量表得分',
        type: 'radar',
        data: [
          {
            value: data,
            fontSize: 12,
            name: '得分',
            areaStyle: {
              color: 'rgba(255, 215, 0, 0.5)' // 修改区域颜色
            },
            lineStyle: {
              color: '#ffd700', // 修改线条颜色
              width: 2 // 修改线条宽度
            }
          }
        ]
      }
    ],
    backgroundColor: '#0d1223' // 修改背景颜色
  };

  // 设置 ECharts 配置
  myChart.setOption(option, true);
};

// 监听cdata变化
watch(() => props.cdata, () => {
  nextTick(() => {
    updateChart();
  });
}, { deep: true });

// 组件挂载后初始化图表
onMounted(() => {
  initChart();
});

// 组件销毁前清理
onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', myChart.resize);
    myChart.dispose();
  }
});
</script>

<style scoped>
</style>