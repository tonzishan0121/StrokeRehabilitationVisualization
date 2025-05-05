<script setup>
import * as echarts from 'echarts';
import { ref, onMounted,defineProps,watch } from 'vue';
import adjustedData from '../../store/data.json'; 
import { debounce } from '../../utils/index';


const props = defineProps({
  date:{
    type:Array,
    default:["0", "5"]
  } 
});
// 监听 props.date 的变化
watch(() => props.date, (newDate) => {
  if (newDate) {
    getNewDataDebounce(newDate);
  }
}, { deep: true });
 
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

let prevDate = props.date;

// 新增状态跟踪
// 修改状态定义
const currentPosition = ref(0); // 0: chart1活动，1: chart2活动

const chart1Ref = ref(null);
const chart2Ref = ref(null);
const activeInstance = ref(null); // 统一管理当前活动实例

const getNewData = (data) => {
  const chart1 = chart1Ref.value;
  const chart2 = chart2Ref.value;
  const isNextLarger = data[0] > prevDate[0]; 
  if (data[0] === prevDate[0]) return;

  // Case 1: chart1活动时左滑
  if (currentPosition.value === 0 && isNextLarger) {
    // 初始化新位置（禁用过渡）
    chart2.style.transition = 'none';
    chart2.style.left = '100%';
    void chart2.offsetWidth;
    
    // 销毁旧实例并初始化新图表
    const instance = echarts.getInstanceByDom(chart2);
    instance && instance.dispose();
    const newInstance = echarts.init(chart2);
    newInstance.setOption(option);

    // 执行左滑动画
    chart2.style.transition = 'left 1s ease';
    chart1.style.transition = 'left 1s ease';
    chart1.style.left = '-100%';
    chart2.style.left = '0%';
    currentPosition.value = 1;
  }
  
  // Case 2: chart1活动时右滑 
  else if (currentPosition.value === 0 && !isNextLarger) {
    chart2.style.transition = 'none';
    chart2.style.left = '-100%';
    void chart2.offsetWidth;

    const instance = echarts.getInstanceByDom(chart2);
    instance && instance.dispose();
    const newInstance = echarts.init(chart2);
    newInstance.setOption(option);

    chart2.style.transition = 'left 1s ease';
    chart1.style.transition = 'left 1s ease';
    chart1.style.left = '100%';
    chart2.style.left = '0%';
    currentPosition.value = 1;
    
    // 修复层级设置（新增）
    chart2.style.zIndex = 2;
    chart1.style.zIndex = 1;
}

  // Case 3: chart2活动时左滑
  else if (currentPosition.value === 1 && isNextLarger) {
    chart1.style.transition = 'none';
    chart1.style.left = '100%';
    void chart1.offsetWidth;

    const instance = echarts.getInstanceByDom(chart1);
    instance && instance.dispose();
    const newInstance = echarts.init(chart1);
    newInstance.setOption(option);

    chart1.style.transition = 'left 1s ease';
    chart2.style.transition = 'left 1s ease';
    chart2.style.left = '-100%';
    chart1.style.left = '0%';
    currentPosition.value = 0;
  }

  // Case 4: chart2活动时右滑
  else if (currentPosition.value === 1 && !isNextLarger) {
    chart1.style.transition = 'none';
    chart1.style.left = '-100%';
    void chart1.offsetWidth;

    const instance = echarts.getInstanceByDom(chart1);
    instance && instance.dispose();
    const newInstance = echarts.init(chart1);
    newInstance.setOption(option);

    chart1.style.transition = 'left 1s ease';
    chart2.style.transition = 'left 1s ease';
    chart2.style.left = '100%';
    chart1.style.left = '0%';
    currentPosition.value = 0;
    
    // 修复层级设置（新增）
    chart1.style.zIndex = 2;
    chart2.style.zIndex = 1;
}
  prevDate = data;
};
const getNewDataDebounce=debounce(getNewData,1000)

// 修改初始化函数
const initChart = () => {
  [chart1Ref.value, chart2Ref.value].forEach((chartEl, index) => {
    if (!chartEl) return;
    const instance = echarts.getInstanceByDom(chartEl) || echarts.init(chartEl);
    instance.setOption(option);
    if (index === 0) activeInstance.value = instance; // 默认第一个为活动实例
  });
};
// 在组件挂载后调用初始化函数
onMounted(() => {
  initChart();
});
</script>
<template>
  <div class="chart-container">
    <div ref="chart1Ref" class="chart" :class="{active: currentPosition === 0}" id="chart1"></div>
    <div ref="chart2Ref" class="chart" :class="{active: currentPosition === 1}" id="chart2"></div>
  </div>
</template>

<style scoped>
.chart {
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  transition: left 1s ease;
  z-index: 1;
}

.chart.active {
  z-index: 2;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

</style>