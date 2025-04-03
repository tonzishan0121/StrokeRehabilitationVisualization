<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          //'-30h','29h','-28h','-27h','-26h','-25h',
          '-24h','-23h','-22h','-21h','-20h','-19h',
          '-18h','-17h','-16h','-15h','-14h','-13h',
          '-12h','-11h','-10h','-9h','-8h','-7h','-6h',
          '-5h','-4h','-3h','-2h','-1h'
        ],
        lineData:
          [120,125,130,135,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,70,90,105],
        barData: 
        [80, 82, 84, 86, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 58, 56, 54, 52, 50],
        rateData: 
        [70, 72, 84, 76, 78, 80, 88, 84, 86, 88, 90, 92, 94, 96, 98, 100, 98, 96, 84, 92, 90, 88, 86, 84]
        
      }
    };
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
      for (let i = 0; i < this.cdata.barData.length -1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>