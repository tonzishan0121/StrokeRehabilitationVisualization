<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="margin-left:0.75rem;color:white;font-size:22px">当前康复量表得分</span>
      </div>
      <div class="display: flex;align-items: center;flex-direction: column; body-box">
        <centerRight2Chart :cdata="cdata"/>
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart from './centerRight2Chart/index.vue';
import {apiConfig,requestf} from '../../utils/apiConfig.js';

import { ref } from 'vue';
const cdata = ref({});
requestf(apiConfig.getScore,
  {
    "id": localStorage.getItem("id")
  },
  'POST',(res) => {
    cdata.value = res;
  })
export default {
  data() {
    return {
      cdata: cdata
    }
  },
  components: { centerRight2Chart }
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
