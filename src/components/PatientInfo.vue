<template>
  <div class="info-item">
    <span style="font-size:x-large;">姓名：{{patient.name}}</span>
    <span style="font-size:x-large;">性别：{{patient.gender}}</span>
    <span style="font-size:x-large;">年龄：{{patient.age}}</span>
    <span style="font-size:x-large;">住院号：10000</span>
    <span style="font-size:x-large;">住院时间：{{patient.admission_date}}</span>
    <span style="font-size:x-large;">科室：{{patient.department}}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const patient = ref({
  name: '  ',
  gender: '  ',
  age: 0,
  date: '2025-05-05',
  unit: '重症监护室'
});


</script>

<style scoped>
@import '../assets/scss/index.scss';
</style>