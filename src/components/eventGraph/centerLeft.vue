<template>
  <dv-border-box-10>
    <div id="centerLeft1">
      <div class="bg-color-black">
        <!-- 标题区域 -->
        <div class="d-flex pt-2 pl-2">
          <span>
            <span class="text"><b>患者基本信息</b></span>
           
          </span>
          
        </div>

        <!-- 患者基本信息展示，分为左侧和右侧 -->
        <div class="patient-info">
          <!-- 左侧：患者头像 -->
          <div class="avatar-container">
            <img src="../../assets/patient.png" alt="患者头像" class="patient-avatar" />
          </div>

          <!-- 右侧：患者其他信息 -->
          <div class="info-container">
            <div class="info-text">
              <div class="info-row">
                <div class="column">
                  <p><strong>姓名：</strong>{{ patient.name }} </p>
                  <p><strong>性别：</strong>{{ patient.gender }}</p>
                  <p><strong>主治医师：</strong>{{ patient.attendingPhysician }}</p>
                  <p><strong>病情：</strong>{{ patient.condition }}</p>
                </div>

                <div class="column">
                  <p><strong>年龄：</strong>{{ patient.age }} 岁</p>
                  <p><strong>住院编号：</strong>{{ patient.hospitalNumber }}</p>
                  <p><strong>主管护士：</strong>{{ patient.headNurse }}</p>
                  <p><strong>康复医师：</strong>{{ patient.rehabilitationdoc }}</p>
                </div>
              </div>
            </div>

            <!-- 主要数据展示 -->
            <div class="bottom-data">
              <div
                class="item-box mt-2"
                v-for="item in healthData"
                :key="item.text"
              >
                <div class="d-flex">
                  <span class="icon">🔹</span>
                  <dv-digital-flop class="dv-digital-flop" :config="item.number" />
                </div>
                <p class="text">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dv-border-box-10>
</template>

<script>
import {requestf,apiConfig} from "../../utils/apiConfig";
let patient =  {
        name: "张三",
        age: 65,
        gender: "男",
        hospitalNumber: "123456789", 
        attendingPhysician: "李医生", 
        headNurse: "王护士", 
        condition: "脑卒中恢复期",
        rehabilitationdoc: "赵医生" 
      };
export default {
  data() {
    return {
      avatar: "../../assets/patient.webp",
      patient: patient,
      healthData: [
        {
          number: {
            number: [25],
            toFixed: 0,
            textAlign: "left",
            content: "{nt}",
            style: { fontSize: 24 }
          },
          text: "康复训练次数"
        },
        {
          number: {
            number: [95],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: { fontSize: 24 }
          },
          text: "平均康复完成率 (%)"
        },
        {
          number: {
            number: [75],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: { fontSize: 24 }
          },
          text: "当前体力恢复 (%)"
        },
        {
          number: {
            number: [36],
            toFixed: 0,
            textAlign: "left",
            // content: "{nt}",
            style: { fontSize: 24 }
          },
          text: "卒中量表评分(NIHSS)"
        }
      ]
    };
  },
   mounted:  function () {
    requestf(apiConfig.patientInfo,{
      name: "张三"
    },"POST",(res)=>{
      this.patient=res;
    })
  },
};
</script>

<style lang="scss" scoped>
$box-width: 100%;
$box-height:100%;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  
  .bg-color-black {
    height: 90%;
    border-radius: 10px;
  }
  
  .text {
    color: #c3cbde;
    font-size: 20px; /* 设置字体大小为 20px */
  }
  
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  /* 患者基本信息的布局 */
  .patient-info {
    display: flex;
    align-items: center;
    margin-top: 10px;

    /* 左侧：患者头像 */
    .avatar-container {
      margin-right: 50px;
      margin-left: 50px;
    }
    
    .patient-avatar {
      width: 160px; /* 设置矩形宽度 */
      height: 220px; /* 设置矩形高度 */
      object-fit: cover; /* 确保图片裁剪适应 */
    }

    /* 右侧：患者信息和健康数据 */
    .info-container {
      .info-text {
        color: #00bcd4; /* 科技感蓝色 */
        font-size: 20px;
        line-height: 1.8;
        margin-top: 20;
        margin-bottom: 40px;

        .info-row {
          display: flex;
          justify-content: space-between; /* 左右两列 */
          margin: 12px 0;
        }

        .column {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* 左对齐 */
          width: 68%; /* 每列占据一半宽度 */
        }

        p {
          margin: 0;
        }
      }

      .bottom-data {
        margin-top: 10px;
        
        .item-box {
          font-size: 18px;
          float: right;
          position: relative;
          width: 50%;
          color: #d3d6dd;

          .dv-digital-flop {
            width: 120px;
            height: 30px;
          }

          .icon {
            font-size: 20px;
            color: #ffc107;
          }
        }
      }
    }
  }
}
</style>
