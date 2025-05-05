<template>
  <div>
    <Chart :cdata="cdata" :chatName="chatName" :currentData="currentData" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      drawTiming: null,
      cdata: {
        year: null,
        weekCategory: [],
        maxData: 100,
        weekMaxData: [],
        weekLineData: []
      }
    }
  },
  props: {
    chatName: {
      type: String,
      default: '2'
    },
    currentData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Chart,
  },
  watch: {
    chatName () {
      this.drawTimingFn();
    }
  },
  mounted () {
    this.drawTimingFn();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn () {
      this.setData();
    },
    setData () {
      // 清空轮询数据
      this.cdata.weekCategory = [];
      this.cdata.weekMaxData = [];
      this.cdata.weekLineData = [];

      let dateBase = new Date();
      this.cdata.year = dateBase.getFullYear();
      // 周数据
      for (let i = 0; i < 7; i++) {
        // 日期
        let date = new Date();
        this.cdata.weekCategory.unshift([date.getMonth() , date.getDate()-i+7].join("/"));

        // 折线图数据
        this.cdata.weekMaxData.push(this.cdata.maxData);
      }
      this.cdata.weekLineData = this.currentData;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>