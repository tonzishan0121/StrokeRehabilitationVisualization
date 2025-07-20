<template>
  <div>
    <!-- 将组合后的数据传递给子组件 -->
    <Chart :cdata="combinedData" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      // 定义 category
      category: [
        '-24h','-23h','-22h','-21h','-20h','-19h',
        '-18h','-17h','-16h','-15h','-14h','-13h',
        '-12h','-11h','-10h','-9h','-8h','-7h','-6h',
        '-5h','-4h','-3h','-2h','-1h'
      ]
    };
  },
  props: {
    cdata: {
      type: Object,
      default: function () {
        return {
          heartRate: [],
          systolicPressure: [],
          diastolicPressure: []
        };
      }
    }
  },
  computed: {
    // 计算属性，用于组合数据
    combinedData() {
      return {
        category: this.category,
        lineData: this.cdata.systolic_pressure, // 收缩压
        barData: this.cdata.diastolic_pressure, // 舒张压
        rateData: this.cdata.heart_rate // 心率
      };
    }
  },
  components: {
    Chart,
  },
  mounted () {
    //this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.combinedData.barData.length - 1; i++) {
        let rate = this.combinedData.barData[i] / this.combinedData.lineData[i];
        this.combinedData.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>