<template>
  <CommonLayout>
    <div class="graph-box">
      <echartTimeline :date="sliderRef"></echartTimeline>
    </div>
    <div class="five-box">
      <dv-border-box-10 v-for="(_, index) in 5" :key="index">
        <rehabiliPlan 
          :title="exprehabitate[index]?.title" 
          :tips="exprehabitate[index]?.tips"
          :sections="exprehabitate[index]?.sections"
        />
      </dv-border-box-10>
    </div>
  </CommonLayout>
  <siderBar @sliderUpdated="sliderUpdated"></siderBar>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import echartTimeline from '../components/graph/echartTimeline.vue';
import rehabiliPlan from "../components/graph/rehabilitationPlan.vue";
import CommonLayout from "../components/CommonLayout.vue";
import { formatTime } from "../utils/index";
import siderBar from "../components/graph/siderBar.vue";
import { apiConfig, requestf } from '../utils/apiConfig';

const id = localStorage.getItem("id");
export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      sliderRef: ["0","5"],
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      exprehabitate: []
    }
  },

  components: {
    echartTimeline,
    rehabiliPlan,
    CommonLayout,
    siderBar
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
    requestf(apiConfig.getRehab,
      {"id":id,
        "start":"0",
        "end":"5"
      },
      'POST',(res) => {
        this.exprehabitate = res;
      });
      
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
    },
    sliderUpdated(extractedNumber) {
      requestf(apiConfig.getRehab,
        {"id":id,
          "start":extractedNumber[0],
          "end":extractedNumber[1]
        },
        'POST',(res) => {
          this.exprehabitate = res; 
        });
      this.sliderRef=extractedNumber;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
  