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
                <span class="title-text">脑卒中重症康复<br/><br/>智能临床路径可视化平台</span>
                <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" style="bottom:-10px;"/>
              </div>
              <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="decorationColor" />
            </div>
            <dv-decoration-10 class="dv-dec-10-s" />
          </div>
          <span class="text" style="position:absolute;right:2%;">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span>        
          <div class="body-box">
            <!-- 信息区 -->
            <div class="info-box">
              <dv-border-box-12 >
                <div class="info-item">
                  <span style="font-size:large;">姓名：张三</span>
                  <span style="font-size:large;">性别：男</span>
                  <span style="font-size:large;">年龄：65</span>
                  <span style="font-size:large;">住院号：10000</span>
                  <span style="font-size:large;">住院时间：2025.4.1</span>
                  <span style="font-size:large;">科室：重症监护室</span>
                </div>
              </dv-border-box-12>
            </div>
            <div class="graph-box">
              <echartTimeline/>
            </div>
            <div class="five-box">
              <dv-border-box-10  v-for="index in 5" :key="index">
                <temp/>
              </dv-border-box-10>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import drawMixin from "../utils/drawMixin";
  import { formatTime } from '../utils/index.js'
  import echartTimeline from './echartTimeline.vue'
  import temp from "../components/temp.vue";

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
      temp
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
  