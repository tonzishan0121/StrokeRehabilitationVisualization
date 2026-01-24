<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
import nodeStyle from '../../store/nodeStyle.json';
import { graph_3_nodes_data } from '../../common/dataSource/index';
import { useRoute } from 'vue-router';


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
    repulsion: 660,
    edgeLength: 2,
    gravity: 0
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

function update_series_template(id){
  let series_template = [];
// 生成 3 天的图表系列配置
  for (let i = 1; i <= 3; i++) {
    const left1Index = (i - 1) * 33;
    const right1Index = 100 - (left1Index + 15);
    const left2Index = left1Index + 15;
    const right2Index = 100 - (left2Index + 15);
    let left = {
      links: [
        {source: '康复评估', target: 'S5Q', ...nodeStyle['links']},
        {source: '康复评估', target: 'FOIS', ...nodeStyle['links']},
        {source: '康复评估', target: 'BBS sitting', ...nodeStyle['links']},
        {source: '康复评估', target: 'BBS standing', ...nodeStyle['links']},
        {source: '康复评估', target: 'BBS sit-to-stand', ...nodeStyle['links']},
        {source: '康复评估', target: 'RASS', ...nodeStyle['links']},
        {source: '康复评估', target: 'MMASA', ...nodeStyle['nodes']},
        {source: '康复评估', target: 'MRCsum', ...nodeStyle['nodes']},
      ],
      nodes: [
        {name:'康复评估',x:160+640*(i-1),...nodeStyle['node100']},
        {name:'S5Q',...nodeStyle['node001']},
        {name:'FOIS',...nodeStyle['node001']},
        {name:'BBS sitting',...nodeStyle['node001']},
        {name:'BBS standing',...nodeStyle['node001']},
        {name:'RASS',...nodeStyle['node001']},
        {name:'MMASA',...nodeStyle['node001']},
        {name:'MRCsum',...nodeStyle['node001']},
        {name:'BBS sit-to-stand',...nodeStyle['node001']}
      ]
    };
    let right = {
      nodes: [
        {name:'康复训练', x:460+640*(i-1), ...nodeStyle['node200']}
      ],
      links: []
    };
    const data = [...(new Set(graph_3_nodes_data(id+i)))];
    data.map((item)=>{
      right.nodes.push({name:item, ...nodeStyle['node002']})
      right.links.push({source:'康复训练', target:item, ...nodeStyle['links']})
    })
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
const initChart = (id) => {
  let option = update_series_template(id);
  let chart = echarts.init(document.getElementById('chart'));
  chart.setOption(option);
};

// 在组件挂载后调用初始化函数
onMounted(() => {
  // 组件初始化时发起数据请求
  const id = useRoute().query.id;
  if (id) {
    initChart(id);
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