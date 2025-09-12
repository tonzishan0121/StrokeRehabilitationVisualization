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
        year: 2025,
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
      this.setData();
    },
    currentData () {
      this.setData();
    }
  },
  mounted () {
    this.setData();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {

    setData () {
      // 清空轮询数据
      this.cdata.weekCategory = [];
      this.cdata.weekMaxData = [];
      this.cdata.weekLineData = [];
      this.cdata.maxData = parseInt(Math.max(...this.currentData))
      // 周数据
      for (let i = 0; i < 3; i++) {
        // 日期
        let date = new Date();
        this.cdata.weekCategory.unshift([date.getMonth() , date.getDate()-i*14+7].join("/"));

        // 折线图数据
        this.cdata.weekMaxData.push(this.cdata.maxData);
      }
      this.cdata.weekLineData = this.currentData;
      console.log(this.cdata);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>