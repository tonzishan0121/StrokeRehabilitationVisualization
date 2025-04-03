<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="margin-left:0.75rem;color:blue;font-weight: bold;">当前康复量表得分</span>
      </div>
      <div class="display: flex;align-items: center;flex-direction: column; body-box">
        <centerRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from '@/components/echart/centerRight/centerRightChart'

export default {
  data() {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      }
    }
  },
  components: { centerRight2Chart1 }
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 100%;
  $box-width: 100%;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
}
</style>
