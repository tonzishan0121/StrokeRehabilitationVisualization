<script setup>
import * as echarts from 'echarts';
import { ref, onMounted, defineProps, watch } from 'vue';
import { debounce, nodeBuilder } from '../../utils/index';
import { apiConfig, requestf } from '../../utils/apiConfig';
import nodeStyle from '../../store/nodeStyle.json';
import nodeList from '../../store/nodeContent.json';

const props = defineProps({
  // 日期范围，默认为 ["1", "5"]
  date: {
    type: Array,
    default: () => ["1", "5"]
  } 
});

// 存储请求返回的数据
const res_data = ref(nodeList);

// 定义图表的公共配置
let commonSeriesConfig = { 
  type: 'graph',
  layout: 'force',
  layoutAnimation: true,
  roam: 'scale',
  label: {
    show: true,
    color: "inherit",
    position: "bottom",
    fontSize: 12
  },
  force: {
    repulsion: 100,
    edgeLength: 14,
    gravity: 0.01
  },
  itemStyle: {
    borderColor: '#fff',
    borderWidth: 1,
    shadowBlur: 10
  },
  scaleLimit: { max: 2, min: 0.5 },
  draggable: true
};

// 存储上一次的日期范围
let prevDate = props.date;

// 记录当前活动的图表索引，0 表示 chart1，1 表示 chart2
const currentPosition = ref(0); 

// 引用 chart1 的 DOM 元素
const chart1Ref = ref(null);
// 引用 chart2 的 DOM 元素
const chart2Ref = ref(null);
// 统一管理当前活动的 ECharts 实例
const activeInstance = ref(null); 

/**
 * 监听 props.date 的变化，当日期范围改变时，重新请求数据
 */
watch(() => props.date, (newDate) => {
  if (newDate) {
    let requestData = {
      id: "10000",
      start: props.date[0],
      end: props.date[1]
    };
    requestf(apiConfig.getPath, requestData, 'POST', (res) => { 
      res_data.value = res;
      console.log(requestData);
      console.log("请求返回数据：", res_data.value);
      let datas = update_series_template(res_data.value);
      // 防抖调用 getNewData 函数
      getNewDataDebounce(newDate,datas);
    });
  }
}, {
  deep: true 
});

/**
 * 生成图表配置模板
 * @param {string} left - 图表的左边界
 * @param {string} right - 图表的右边界
 * @param {Object} data - 包含节点和链接数据的对象
 * @returns {Object} - 图表配置对象
 */
function graph_template(left, right, data) {
  return {
    ...commonSeriesConfig,
    nodes: data.nodes,
    links: data.links,
    left: left, 
    top: '0%', 
    right: right,
    bottom: '0%'
  };
}

function update_series_template(data){
  let series_template = [];
// 生成 5 天的图表系列配置
  for (let i = 1; i <= 5; i++) {
    const left1Index = (i - 1) * 20;
    const right1Index = 100 - left1Index + 10;
    const left2Index = left1Index + 10;
    const right2Index = right1Index - 10;
    // 调用 nodeBuilder 函数生成节点和链接数据
    const _ = nodeBuilder(data, nodeStyle, i);
    let left = {
      links: _.assessmentLinks,
      nodes: _.assessmentNodes
    };
    let right = {
      nodes: _.treatmentNodes,
      links: _.treatmentLinks
    };
    // 将生成的图表配置添加到 series_template 数组中
    series_template.push(graph_template(`${left1Index}%`, `${right1Index}%`, left));
    series_template.push(graph_template(`${left2Index}%`, `${right2Index}%`, right));
  }
  // 定义 ECharts 配置对象
  const option = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true
    },
    series: series_template
  };
  return option;
}


/**
 * 根据日期范围更新图表
 * @param {Array} data - 新的日期范围
 */
function getNewData(data,option) {
  const chart1 = chart1Ref.value;
  const chart2 = chart2Ref.value;
  const isNextLarger = data[0] > prevDate[0]; 
  // 如果日期范围没有变化，则直接返回
  if (data[0] === prevDate[0]) return;
  // Case 1: chart1 活动时左滑
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
  
  // Case 2: chart1 活动时右滑 
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

  // Case 3: chart2 活动时左滑
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

  // Case 4: chart2 活动时右滑
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
  };
  // 更新上一次的日期范围
  prevDate = data;
}

// 防抖处理 getNewData 函数，避免频繁触发
const getNewDataDebounce = debounce(getNewData, 1000);

/**
 * 初始化图表
 */
const initChart = () => {
  let option = update_series_template(res_data.value);
  [chart1Ref.value, chart2Ref.value].forEach((chartEl, index) => {
    if (!chartEl) return;
    const instance = echarts.getInstanceByDom(chartEl) || echarts.init(chartEl);
    instance.setOption(option);
    if (index === 0) activeInstance.value = instance; // 默认第一个为活动实例
    else instance.dispose(); // 其他实例销毁
  });
};

// 在组件挂载后调用初始化函数
onMounted(() => {
  let requestData = {
    id: "10000",
    start: props.date[0],
    end: props.date[1]
  };
  // 组件初始化时发起数据请求
  requestf(apiConfig.getPath, requestData, 'POST', (res) => { 
    res_data.value = res;
    update_series_template(res_data.value);
    initChart();
  });
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