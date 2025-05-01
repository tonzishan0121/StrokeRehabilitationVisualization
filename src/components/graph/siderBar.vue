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
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const aspectRatio = Math.min(windowWidth, windowHeight);

    // 动态计算 left 和 right 的值
    const sideMargin = 0.2 * aspectRatio; // 8% 的边距
    const left = sideMargin;
    const right = sideMargin;

    // 设置 slider 的样式
    sliderRef.value.style.left = `${left}px`;
    sliderRef.value.style.right = `${right}px`;

    sliderInstance = noUiSlider.create(sliderRef.value, {
      // 设置滑块的初始值，这里表示两个滑块分别初始在 0 和 3 的位置
      start: [0, 3],
      connect: true,
      // 两个滑块之间的最小间隔值为 5
      margin: 5,
      // 两个滑块之间的最大间隔值为 5
      limit: 5,
      // 滑块的取值范围，最小值为 0，最大值为 10
      range: {
        'min': 0,
        'max': 10
      },
      // 滑块的行为模式为可拖动
      behaviour: 'drag',
      // 显示滑块的提示框
      tooltips: true,
      // 提示框内容的格式化配置
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
    bottom: 43%;
    height: 35px;
    opacity: 0.8;
  }
</style>