<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="350px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data() {
    return {
      options: {},
      // 定义颜色
      colorList: {
        linearYtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#f5b44d'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearGtoB: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#43dfa2'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#1c98e8'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        areaBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(35,184,210,.2)'
            },
            {
              offset: 1,
              color: 'rgba(35,184,210,0)'
            }
          ]
        }
      }
    }
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
    chatName: {
      type: String,
      default: ''
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.setData(newData)
      },
      immediate: true,
      deep: true
    },
    chatName: {
      handler(newName) {
        this.setData(this.cdata, newName);
      },
    }
  },
  methods:{
    setData(newData, newName=this.chatName) {
      this.options = {
          title: {
            text: newName,
            textStyle: {
              color: '#D3D6DD',
              fontSize: 16,
              fontWeight: 'normal'
            },
            subtext: newData.year + '/' + newData.weekCategory[6],
            subtextStyle: {
              color: '#fff',
              fontSize: 14
            },
            top: 20,
            left: 80
          },
          tooltip: {
            trigger: 'item'
          },
          grid: {
            left: 90,
            right: 80,
            bottom: 40,
            top: '15%'
          },
          xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 18
            },
            data: newData.weekCategory
          },
          // 下方Y轴
          yAxis: {
            name: '',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
              color: 'rgba(255,255,255,.5)',
              fontSize: 16
            },
            max: newData.maxData,
            splitNumber: 4,

            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: 0.1
              }
            },
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 16
            }
          },
          series: [
            {
              name: "",
              type: 'line',
              smooth: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#fff'
                }
              },
              lineStyle: {
                normal: {
                  color: this.colorList.linearBtoG,
                  width: 3
                }
              },
              areaStyle: {
                normal: {
                  // 修改为通过 this 访问
                  color: this.colorList.areaBtoG
                }
              },
              data: newData.weekLineData,
              lineSmooth: true,
              markLine: {
                silent: true,
                data: [
                  {
                    type: 'average',
                    name: '平均值'
                  }
                ],
                precision: 0,
                label: {
                normal: {
                  textStyle: {
                    fontSize: 16
                  },
                    formatter: '平均值: \n {c}'
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'rgba(248,211,81,.7)'
                  }
                }
              },
              tooltip: {
                position: 'top',
                formatter: '{c} m',
                backgroundColor: 'rgba(28,152,232,.2)',
                padding: 6
              }
            },
            {
              name: '占位背景',
              type: 'bar',
              itemStyle: {
                normal: {
                  show: true,
                  color: '#000',
                  opacity: 0
                }
              },
              silent: true,
              barWidth: '50%',
              data: newData.weekMaxData,
              animation: false
            }
          ]
        }
    }
  }
}
</script>
