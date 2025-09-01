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
import { provide } from 'vue';

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000']
    }
  },
  components: {
    centerLeft,
    centerRight1,
    centerRight2,
    bottomLeft,
    bottomRight,
    CommonLayout
  },
  async mounted() {
    this.timeFn();
    this.cancelLoading();
    const resp = await patient_info("7357954258957766656")
    provide('patient_info', resp.data)
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
