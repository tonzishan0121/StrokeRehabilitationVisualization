<template>
  <CommonLayout>
    <div class="graph-box">
      <echartTimeline></echartTimeline>
    </div>
    <div class="three-box">
      <dv-border-box-10 v-for="(_, index) in 3" :key="index">
        <rehabiliPlan 
          :title="exprehabitate[index]?.title" 
          :tips="exprehabitate[index]?.tips"
          :sections="exprehabitate[index]?.sections"
        />
      </dv-border-box-10>
    </div>
  </CommonLayout>

</template>

<script>
import drawMixin from "../utils/drawMixin";
import echartTimeline from '../components/graph/echartTimeline.vue';
import rehabiliPlan from "../components/graph/rehabilitationPlan.vue";
import CommonLayout from "../components/CommonLayout.vue";
import { ref, onMounted, provide } from 'vue';
import { useRoute } from 'vue-router';
import { patient_info, graph_3_fangan } from "../common/dataSource/index.js";

export default {
  mixins: [drawMixin],
  components: {
    echartTimeline,
    rehabiliPlan,
    CommonLayout
  },
  setup() {
    const exprehabitate = ref([]);
    
    // 添加路由参数和患者信息相关逻辑
    const route = useRoute();
    const patientInfo = ref(null);
    const id = ref(null);
    
    // 获取路由参数并请求数据
    const fetchPatientData = async () => {
      id.value = route.query.id;
      if (id.value) {
        const resp = await patient_info(id.value);
        patientInfo.value = resp;
      }
    };
    
    provide('patient_info', patientInfo);
    provide('id', id);
    

    
    onMounted(async() => {
      fetchPatientData();
      const data =await graph_3_fangan(id.value);
      console.log(data);
      exprehabitate.value = data;
    });
    

    return {
      exprehabitate
    };
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
