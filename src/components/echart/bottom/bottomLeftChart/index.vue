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
        lineData://收缩压
          [ 160, 158, 155, 157, 162, 165, 163, 161, 159, 157, 160, 162, 164, 165, 167, 166, 164, 162, 161, 159, 157, 156, 158 ],
        barData: //舒张压
          [ 100, 98, 97, 99, 101, 102, 100, 99, 98, 96, 98, 99, 100, 101, 102, 100, 98, 97, 96, 95, 94, 93, 95 ],
        rateData: //心率
          [ 90, 88, 85, 87, 92, 95, 91, 89, 88, 86, 87, 90, 92, 94, 93, 95, 92, 90, 88, 86, 84, 83, 85 ]
        
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