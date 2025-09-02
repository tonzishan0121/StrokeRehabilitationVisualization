<template>
  <div class="info-item">
    <span style="font-size:x-large;">姓名：{{data.value.name}}</span>
    <span style="font-size:x-large;">性别：{{data.value.gender}}</span>
    <span style="font-size:x-large;">年龄：{{data.value.age}}</span>
    <span style="font-size:x-large;">住院号：{{data.value.hospitalNumber}}</span>
    <span style="font-size:x-large;">症状：{{data.value.condition}}</span>
    <span style="font-size:x-large;">科室：重症监护室</span>
  </div>
</template>

<script setup>
import { inject,ref } from 'vue';
let data = ref({});
data.value.value = inject('patient_info').value;

</script>

<style scoped>
@import '../assets/scss/index.scss';
</style>