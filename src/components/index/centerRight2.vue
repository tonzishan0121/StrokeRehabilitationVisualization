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
import { today_8_liangbiao } from '@/common/dataSource/index.js';
import { ref, inject, onMounted } from 'vue';

export default {
  setup() {
    const cdata = ref({});
    const id = inject('id');
    
    const fetchData = () => {
      if (id.value) {
        try {
          const resp = today_8_liangbiao(id.value);
          cdata.value = resp || {};
        } catch (error) {
          console.error('获取量表数据失败:', error);
          cdata.value = {};
        }
      }
    };
    
    // 组件挂载后获取数据
    onMounted(() => {
      fetchData();
    });
    
    return {
      cdata
    };
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