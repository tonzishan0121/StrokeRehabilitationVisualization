<template>
  <div class="info-item">
    <span style="font-size:x-large;">姓名：{{patientInfo.name}}</span>
    <span style="font-size:x-large;">性别：{{patientInfo.gender}}</span>
    <span style="font-size:x-large;">年龄：{{patientInfo.age}}</span>
    <span style="font-size:x-large;">住院号：{{patientInfo.hospitalNumber}}</span>
    <span style="font-size:x-large;">症状：{{patientInfo.condition}}</span>
    <span style="font-size:x-large;">科室：重症监护室</span>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

// 修改: 使用正确的inject名称
const patientInfoInject = inject('patient_info');

// 修改: 正确处理ref值的访问
const patientInfo = computed(() => {
  // 当inject的值存在且有value属性时，返回value，否则返回默认对象
    return patientInfoInject?.value || {
      name: '',
      gender: '',
      age: '',
      hospitalNumber: '',
      condition: ''
    };
});
</script>

<style scoped>
@import '../assets/scss/index.scss';
</style>