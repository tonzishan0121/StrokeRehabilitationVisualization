<template>
  <div>
    <!-- 添加key来确保组件重新渲染 -->
    <Chart :cdata="cdata" :key="JSON.stringify(cdata)"/>
  </div>
</template>

<script setup>
import Chart from './chart.vue';

// 确保正确接收props
defineProps({
  cdata: {
    type: Object,
    default: () => ({
      S5Q: 0,
      RASS: 0,
      MMASA: 0,
      MRCsum: 0,
      BBS_sit_to_stand: 0,
      BBS_standing: 0,
      BBS_sitting: 0,
      FOIS: 0
    })
  }
});
</script>