<script setup>
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';

const showItems = ref([]);

defineProps({
  title: {
    type: String,
    default: '康复方案'
  },
  tips: {
    type: Object,
    default: () => ({
      title: 'Tips1：',
      content: '请仔细检查病人是否有不稳定性骨折、急性手术、精神不稳定、不稳定性心律失常、活动性出血、气道不安全等康复训练禁忌症'
    })
  },
  sections: {
    type: Array,
    default: () => [
      {
        title: '物理康复：',
        items: [
          '被动运动训练 、 气道廓清技术',
          '体位训练 、 每2小时翻身'
        ]
      },
      {
        title: '作业康复：',
        items: [
          '多感官刺激',
          '情感支持（渐进式放松、冥想）'
        ]
      },
      {
        title: '吞咽康复：',
        items: [
          '感官刺激 、 电刺激'
        ]
      }
    ]
  }
});

const toggleItems = (index, show) => {
  showItems.value[index] = show;
};

</script>

<template>
  <div class="rehabilitation-plan">
    <RouterLink to="/eventGraph">
      <h2>{{ title }}</h2><span class="risk-point">风险点</span>
    </RouterLink>
    <div class="tips">
      <strong style="color: red;">{{ tips.title }}</strong>{{ tips.content }}
    </div>
    <div v-for="(section, index) in sections" :key="index" class="section">
      <h3>
        {{ section.title }}
      </h3>
      <div style="position: relative; left: 10%; width: 90%;">
        <ul>
          <li v-for="(item, itemIndex) in section.items" :key="itemIndex">● {{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rehabilitation-plan {
  background-color: rgba(232, 244, 217, 0.2);
  padding: 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  width: 96%;
  height: 450px;  
  overflow-y: auto;    
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: green;
  margin-bottom: 18px;
  font-size: 22px;
}
.risk-point {
  color: white;
  font-size: 16px;
  background-color: rgb(255, 0, 0,0.7);
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 4px;
}
.tips {
  margin-bottom: 20px;
  color: white;
  font-size: 16px;
  line-height: 1.2;
  background-color: rgba(22, 137, 209, 0.308);
  padding: 10px;
  border-radius: 4px;
  border-left: 4px solid #ff0000;
}

.section {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.section h3 {
  color: green;
  margin-bottom: 10px;
  font-size: 18px;
}

.section ul {
  list-style-type: none;
  padding: 0;
}

.section li {
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.5;
}
</style>