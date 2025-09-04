<template>
    <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">脑卒中重症康复</span>
              <br/>
              <span class="title-text">智能临床路径可视化平台</span>
              <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" style="bottom:-10px;"/>
            </div>
            <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor" />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
        <span class="text" style="position:absolute;right:2%;top:2%">
          {{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>  
        <div class="event-box">
          <CenterLeft></CenterLeft>
          <CenterRight></CenterRight>
          <BottomLeft></BottomLeft>
          <BottomRight></BottomRight>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount, provide } from 'vue'
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import CenterLeft from '../components/eventGraph/centerLeft.vue';
import CenterRight from '../components/eventGraph/centerRight.vue';
import BottomLeft from "../components/eventGraph/bottomLeft.vue";
import BottomRight from "../components/eventGraph/bottomRight.vue";
import {patient_info} from '../common/dataSource/index.js'
import { useRoute } from 'vue-router'
export default {
  mixins: [drawMixin],
  components: {
    CenterLeft,
    CenterRight,
    BottomLeft,
    BottomRight
  },
  setup() {
    const timing = ref(null)
    const loading = ref(true)
    const dateDay = ref(null)
    const dateYear = ref(null)
    const dateWeek = ref(null)
    const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const decorationColor = ['#568aea', '#000000']
    const route = useRoute()
    const patientInfo = ref(null)
    const id = ref(null)
    
    const timeFn = () => {
      timing.value = setInterval(() => {
        dateDay.value = formatTime(new Date(), 'HH: mm: ss')
        dateYear.value = formatTime(new Date(), 'yyyy-MM-dd')
        dateWeek.value = weekday[new Date().getDay()]
      }, 1000)
    }
    
    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false
      }, 500)
    }
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
      fetchPatientData()
      timeFn()
      cancelLoading()
    })
    
    onBeforeUnmount(() => {
      clearInterval(timing.value)
    })
    
    return {
      timing,
      loading,
      dateDay,
      dateYear,
      dateWeek,
      weekday,
      decorationColor
    }
  }
}
</script>
<style scoped lang="scss"> 
@import '../assets/scss/index.scss';
</style>