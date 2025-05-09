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
            <div class="card-content">
              <div class="data-value">{{ item.number }}</div>
              <div class="data-title">{{ item.title }}</div>
            </div>
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
              <div class="risk-subtitle">{{ risk.index }}</div>
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
  import { requestf,apiConfig } from "../../utils/apiConfig.js";
  export default {
    data() {
      return {
        physiologicalData: [
          { title: '心率', number: '80'+" bpm" },
          { title: '收缩压', number: '120'+" mmHg" },
          { title: '舒张压', number: '80'+" mmHg" },
          { title: '血氧饱和度', number: '98%' },
          
          { title: '体温', number: '36.7' +" ℃"},
          { title: '呼吸频率', number: '16' +" 次/分"}
        ],
        riskPoints: [
          {
            title: '二聚体指数',
            index: "D-二聚体指数："+'0.8'+" mg/L",
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
            index: "营养量表评分："+'2',
            riskPoint: '营养风险',
            suggestions: [
              '肠内营养',
              '肠外营养',
              '营养咨询'
            ]
          },
          {
            title: '血糖水平',
            index: "血糖："+'9.4'+ " mmol/L",
            riskPoint: '血糖风险',
            suggestions: [
              '定期监测血糖',
              '控制饮食',
              '胰岛素药物',
              '合理锻炼'
            ]
          }
        ]
      };
    },
    mounted() {
      requestf(apiConfig.patientData,{
        id:"10000"
      },"POST",(res)=>{
        const data = res;
        // 更新生理数据
        this.physiologicalData = [
          { 
            title: '心率', 
            number: `${data.physiological.heartRate} bpm` 
          },
          { 
            title: '收缩压', 
            number: `${data.physiological.systolicPressure} mmHg` 
          },
          { 
            title: '舒张压', 
            number: `${data.physiological.diastolicPressure} mmHg` 
          },
          { 
            title: '血氧饱和度', 
            number: `${data.physiological.bloodOxygen}%` 
          },
          { 
            title: '体温', 
            number: `${data.physiological.temperature} ℃` 
          },
          { 
            title: '呼吸频率', 
            number: `${data.physiological.respiratoryRate} 次/分` 
          }
        ];

        // 更新风险指标
        this.riskPoints = [
          {
            title: '二聚体指数',
            index: `D-二聚体指数：${data.riskIndicators.dDimer} mg/L`,
            riskPoint: '血栓风险',
            suggestions: data.riskIndicators.dDimerSuggestions
          },
          {
            title: '营养评分',
            index: `营养量表评分：${data.riskIndicators.nutritionScore}`,
            riskPoint: '营养风险',
            suggestions: data.riskIndicators.nutritionSuggestions
          },
          {
            title: '血糖水平',
            index: `血糖：${data.riskIndicators.bloodSugar} mmol/L`,
            riskPoint: '血糖风险',
            suggestions: data.riskIndicators.bloodSugarSuggestions
          }
        ];
      })
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
  
          .data-value {
            font-size: 28px;
            font-weight: bold;
            color: #00eaff;
            margin-bottom: 18px;
          }
  
          .data-title {
            font-size: 20px;
            color: #a1d7ff;
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