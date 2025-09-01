<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span style="margin-left:0.75rem;color:white;font-size:22px">血压与心率健康状况</span>
        </div>
      </div>
      <div>
        <BottomLeftChart :cdata="cdata" />
      </div>
    </div>
  </div>
</template>

<script>
import BottomLeftChart from './bottomLeftChart/index.vue';
import { ref }  from 'vue';
const cdata = ref({});
export default {
  components: {
    BottomLeftChart
  },
  data() {
    return {
      cdata: cdata.value,
    }
  }

}
</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 100%;
#bottomLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 35px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
