<template>
  <dv-border-box-10>
    <div id="center">
      <!-- 生理数据监测模块 -->
      <div class="up">
        <div class="physiological-data-container">
          <div
            class="data-card"
            v-for="(item, index) in physiologicalData"
            :key="index"
          >
            <div class="data-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
  
      <!-- 风险点展示模块 -->
      <div class="down">
        <div class="risk-points-container">
          <div
            class="risk-card"
            v-for="(risk, index) in riskPoints"
            :key="index"
          >
            <div class="risk-content">
              <div class="risk-point">临床风险点：{{ risk.riskPoint }}</div>
              <div class="risk-subtitle" v-if="risk.title === '二聚体指数'">
                D-二聚体指数：{{ risk.index }} mg/L
              </div>
              <div class="risk-subtitle" v-else-if="risk.title === '营养评分'">
                营养量表评分：{{ risk.index }}
              </div>
              <div class="risk-subtitle" v-else-if="risk.title === '血糖水平'">
                血糖：{{ risk.index }} mmol/L
              </div>
              <div class="risk-advice">
                建议：
                <ul>
                  <li v-for="(suggestion, idx) in risk.suggestions" :key="idx">
                    {{ suggestion }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dv-border-box-10>
  </template>
  
  <script>
  import { ref, inject, onMounted } from 'vue'
  import {event_graph} from '../../common/dataSource/index'
  export default {
    setup() {
      const physiologicalData = ref([
        { title: '肺部感染' },
        { title: '心源性损伤'},
        { title: '肝肾功能异常'},
        { title: '房颤'},
        { title: '应激性溃疡'},
        { title: '尿路感染'}
      ])
      
      const riskPoints = ref([
        {
          title: '二聚体指数',
          index: 0.8,
          riskPoint: '血栓风险',
          suggestions: [
            '肝素类药物',
            '肢体运动疗法',
            '凝血功能检测',
            '局部淋巴按摩'
          ]
        },
        {
          title: '营养评分',
          index: 2,
          riskPoint: '营养风险',
          suggestions: [
            '肠内营养',
            '肠外营养',
            '营养咨询'
          ]
        },
        {
          title: '血糖水平',
          index: 9.4,
          riskPoint: '血糖风险',
          suggestions: [
            '定期监测血糖',
            '控制饮食',
            '胰岛素药物',
            '合理锻炼'
          ]
        }
      ])
      onMounted(() => { 
        const id = inject('id');
        const data = event_graph(id);
        console.log(data);
        physiologicalData.value = data.physiological;
        riskPoints.value[0].index = data.riskIndicators.dDimer;
        riskPoints.value[0].suggestions = data.riskIndicators.dDimerSuggestions;
        riskPoints.value[1].index = data.riskIndicators.nutritionScore;
        riskPoints.value[1].suggestions = data.riskIndicators.nutritionSuggestions;
        riskPoints.value[2].index = data.riskIndicators.bloodSugar;
        riskPoints.value[2].suggestions = data.riskIndicators.bloodSugarSuggestions;
      })
      return {
        physiologicalData,
        riskPoints
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  #center {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #0a1f44, #12264f);
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Microsoft YaHei', sans-serif;
  
    // 上半部分 - 生理数据
    .up {
      .physiological-data-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
  
        .data-card {
          background: linear-gradient(145deg, #5c9999, #627cef);
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 0 10px rgba(73, 105, 117, 0.2);
          text-align: center;
          transition: all 0.3s ease;
  
          &:hover {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
            transform: translateY(-4px);
          }
  
          .data-title {
            font-size: 28px;
            color: #ffd54f;
            margin: 24px;
          }
        }
      }
    }
  
    // 下半部分 - 风险点
    .down {
      margin-top: 20px;
  
      .risk-points-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
  
        .risk-card {
          background: linear-gradient(180deg, #152F54, #8b87db);
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
          height: 220px;
          overflow: hidden;
          transition: all 0.3s ease;
  
          &:hover {
            box-shadow: 0 0 20px rgba(255, 87, 34, 0.4);
            transform: translateY(-4px);
          }
  
          .risk-content {
            color: #ffffff;
            font-size: 14px;
            line-height: 1.5;
  
            .risk-point {
              color: #ff6f61;
              font-weight: bold;
              font-size: 18px;
              margin-bottom: 5px;
            }
  
            .risk-subtitle {
              color: #ffd54f;
              margin-bottom: 5px;
            }
  
            .risk-advice {
              color: #a1d7ff;
  
              ul {
                list-style-type: disc;
                padding-left: 20px;
                margin-top: 8px;
  
                li {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
  </style>