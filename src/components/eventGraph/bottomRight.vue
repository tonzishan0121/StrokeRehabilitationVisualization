<template>
  <dv-border-box-10>
    <div id="bottomRight">
      <div class="bg-color-black">
        <div class="d-flex pt-2 pl-2">
          <span>
            <span class="text"><b>基于事理图谱的并发症路径分析</b></span>
          </span>
          
        </div>
        <div>
          <BottomRightChart />
        </div>
      </div>
    </div>
  </dv-border-box-10>  
</template>

<script>
import BottomRightChart from './bottomRightChart/index.vue'

export default {
  components: {
    BottomRightChart
  }
}
</script>

<style lang="scss" scoped>
$box-height: 400;
$box-width: 90;
#bottomRight {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
    font-size: 20px; /* 设置字体大小为 20px */
    margin-top: 20px;
  }
} 
</style>