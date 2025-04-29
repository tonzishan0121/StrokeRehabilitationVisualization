<template>
  <CommonLayout>
    <div class="graph-box">
      <echartTimeline/>
    </div>
    <div class="five-box">
      <dv-border-box-10  v-for="index in 5" :key="index">
        <rehabiliPlan/>
      </dv-border-box-10>
    </div>
  </CommonLayout>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import echartTimeline from '../components/graph/echartTimeline.vue'
import rehabiliPlan from "../components/graph/rehabilitationPlan.vue";
import CommonLayout from "../components/CommonLayout.vue"

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
    echartTimeline,
    rehabiliPlan,
    CommonLayout
  },
  mounted() {
    this.timeFn()
    this.cancelLoading()
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
  