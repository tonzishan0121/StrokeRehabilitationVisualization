<script setup>
import { onMounted, onUnmounted, ref, defineEmits } from 'vue';
import noUiSlider from 'nouislider';
import '/node_modules/nouislider/dist/nouislider.css';
import resizeMixin from '../../utils/resizeMixin.js';
import { defineOptions } from 'vue';
import { debounce } from '../../utils/index.js';

// 定义自定义事件
const emit = defineEmits(['sliderUpdated']);

defineOptions({
  mixins: [resizeMixin]
});

const sliderRef = ref(null);
let sliderInstance = null;
const formatTooltip = (value) => {
  const numValue = typeof value === 'number' ? value : parseFloat(value);
  return `<span style="color:rgb(0, 100, 128, 0.6);
  font-size: 16px;font-weight: 600;">${Math.floor(numValue)}day</span>`;
};
const handleUpdate = (values) => {
  const regex = />(\d+)day</;
  const match1 = values[0].match(regex);
  const match2 = values[1].match(regex);
  let extractedNumber = [];
  if (match1 && match2) {
    extractedNumber = [match1[1], match2[1]];
    // 触发自定义事件，传递 extractedNumber
    emit('sliderUpdated', extractedNumber);
  }
  return extractedNumber
};

const initSlider = () => {
  if (sliderRef.value) {
    if (sliderInstance) {
      sliderInstance.destroy();
    }
    sliderInstance = noUiSlider.create(sliderRef.value, {
      start: [0, 3],
      connect: true,
      margin: 5,
      limit: 5,
      range: {
        'min': 0,
        'max': 10
      },
      behaviour: 'drag',
      tooltips: true,
      format: {
        to: formatTooltip,
        from: (value) => {
          return isNaN(value) ? 0 : value;
        }
      }
    });
    const debouncedHandleUpdate = debounce(handleUpdate, 300); // 300ms 防抖时间
    sliderInstance.on('update', debouncedHandleUpdate);
  }
};

onMounted(() => {
  initSlider();
  
  window.addEventListener('resize', initSlider);
});

onUnmounted(() => {
  window.removeEventListener('resize', initSlider);
  if (sliderInstance) {
    sliderInstance.destroy();
  }
});
</script>
<template>
  <div ref="sliderRef" id="slider"></div>
</template>

<style lang="css" scoped>
#slider {
    position: absolute;
    bottom: 45%;
    left: 8%;
    right: 8%;
    height: 3%;
    opacity: 0.8;
  }
</style>