<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import { nodeBuilder } from '../../utils/index';
import nodeStyle from '../../store/nodeStyle.json';
import nodeList from '../../store/nodeContent.json';
import { graph_3_node } from '../../common/dataSource/index';
import { useRoute } from 'vue-router';

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
    fontSize: 16
  },
  force: {
    repulsion: 100,
    edgeLength: 16,
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
// 生成 3 天的图表系列配置
  for (let i = 1; i <= 3; i++) {
    const left1Index = (i - 1) * 35;
    const right1Index = 100 - (left1Index + 15);
    const left2Index = left1Index + 15;
    const right2Index = 100 - (left2Index + 15);
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
  return {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true
    },
    series: series_template
  };
}

/**
 * 初始化图表
 */
const initChart = () => {
  let option = update_series_template(res_data.value);
  let chart = echarts.init(document.getElementById('chart'));
  chart.setOption(option);
};

// 在组件挂载后调用初始化函数
onMounted(() => {
  // 组件初始化时发起数据请求
  const id = useRoute().query.id;
  if (id) {
    const res = graph_3_node(id);
    res_data.value = res;
    initChart();
  }
});
</script>
<template>
  <div class="chart-container">
    <div ref="chart1Ref" class="chart" id="chart"></div>
  </div>
</template>

<style scoped>
.chart {
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>