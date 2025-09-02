<template>
  <CommonLayout>
  <!-- 上层 数据 -->
  <div class="content-box">
    <div>
      <dv-border-box-12>
        <centerLeft />
      </dv-border-box-12>
    </div>
    <div>
      <centerRight2 />
    </div>
    <div>
      <dv-border-box-13>
        <centerRight1 />
      </dv-border-box-13>
    </div>
  </div>
  <!-- 下层 数据 -->
  <div class="bottom-box">
    <dv-border-box-13>
      <bottomLeft />
    </dv-border-box-13>
    <dv-border-box-12>
      <bottomRight />
    </dv-border-box-12>
  </div>
  </CommonLayout>
</template>


<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import centerLeft from "../components/index/centerLeft.vue"
import centerRight1 from "../components/index/centerRight1.vue"
import centerRight2 from "../components/index/centerRight2.vue"
import bottomLeft from "../components/index/bottomLeft.vue"
import bottomRight from "../components/index/bottomRight.vue"
import CommonLayout from "../components/CommonLayout.vue"
import { patient_info } from "../common/dataSource/index.js";
import { provide, ref, onMounted, onBeforeUnmount, inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  mixins: [drawMixin],
  components: {
    centerLeft,
    centerRight1,
    centerRight2,
    bottomLeft,
    bottomRight,
    CommonLayout
  },
  setup() {
    const timing = ref(null);
    const loading = ref(true);
    const dateDay = ref(null);
    const dateYear = ref(null);
    const dateWeek = ref(null);
    const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const decorationColor = ['#568aea', '#000000'];
    const patientInfo = ref(null);
    const id = ref(null);
    const route = useRoute();
    provide('patient_info', patientInfo);
    provide('id', id);
    const timeFn = () => {
      timing.value = setInterval(() => {
        dateDay.value = formatTime(new Date(), 'HH:mm:ss');
        dateYear.value = formatTime(new Date(), 'yyyy-MM-dd');
        dateWeek.value = weekday[new Date().getDay()];
      }, 1000);
    };

    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    onMounted(
      async () => {
        timeFn();
        cancelLoading();
        id.value = route.query.id;
        const resp = await patient_info(id.value);
        patientInfo.value = resp;
      }
    );
    onBeforeUnmount(() => {
      clearInterval(timing.value);
    });

    return {
      timing,
      loading,
      dateDay,
      dateYear,
      dateWeek,
      weekday,
      decorationColor,
      timeFn,
      cancelLoading
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
