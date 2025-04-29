<template>
  <div ref="chartRef" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'RadarChart',
  data() {
    return {
      myChart: null, // 用于存储 ECharts 实例
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartRef;
      this.myChart = echarts.init(chartDom);

      // 雷达图配置
      const option = {
        title: {
          text: '',
          left: 'center',
          textStyle: {
            color: '#ffffff', // 修改标题颜色
            fontSize: 18, // 修改标题字体大小
            fontWeight: 'bold' // 修改标题字体粗细
          }
        },
        tooltip: {},
        legend: {
          data: ['康复量表得分'],
          align: 'left',
          textStyle: {
            color: '#ffffff', // 修改图例文字颜色
            fontSize: 18 // 修改图例文字大小
          }
        },
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
          name: {
            textStyle: {
              color: '#ffffff', // 修改指示器名称颜色
              fontSize: 16 // 修改指示器名称大小
            }
          }
        },
        series: [
          {
            name: '量表得分',
            type: 'radar',
            data: [
              {
                value:[60, 50, 40, 70, 25, 50,50,75],
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
      this.myChart.setOption(option);

      // 监听窗口大小变化，重新绘制图表
      window.addEventListener('resize', this.myChart.resize);
    },
  },
  beforeDestroy() {
    // 组件销毁时移除事件监听
    if (this.myChart) {
      window.removeEventListener('resize', this.myChart.resize);
      this.myChart.dispose();
    }
  },
};
</script>

<style scoped>
/* 可以根据需要添加样式 */
</style>