<template>
  <div id="centerLeft1">
    <div class="bg-color-black">

      <div class="d-flex pt-2 pl-2" style="margin-top: 10px;">
        <div class="d-flex">
          <span style="margin-left:0.75rem;color:white;font-size:22px">基本生理指标</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <!-- 九个key和value -->
      <div class="nine-box">
        <div
          class="bg-color-black item"
          v-for="item in titleItem"
          :key="item.title"
        >
          <p style="margin-left:0.75rem;color:white;font-size:22px">{{ item.title }}</p>
          <div>
            <dv-digital-flop
              class="dv-dig-flop ml-1 mt-2 pl-3"
              :config="item.number"
            />
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

let patientData = {
  "HR": 0,
  "SBP": 0,
  "ICP": 0,
  "MAP": 0,
  "temperature": 0,
  "RR": 0,
  "SpO2": 0,
  "PEEP": 0,
  "FiO2": 0
};
const patientId = {"id":localStorage.getItem("id")}

export default {
  data() {
    return {
      titleItem: [
        {
          title: '心率 (HR):',
          number: {
            number: [patientData.HR],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '收缩压 (SBP):',
          number: {
            number: [patientData.SBP],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '颅内压 (ICP):',
          number: {
            number: [patientData.ICP],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '平均动脉压 (MAP):',
          number: {
            number: [patientData.MAP],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '体温 (Temperature):',
          number: {
            number: [patientData.temperature],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '呼吸频率 (RR):',
          number: {
            number: [patientData.RR],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '血氧饱和度 (SpO2):',
          number: {
            number: [patientData.SpO2],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },{
          title: '呼气末正压 (PEEP):',
          number: {
            number: [patientData.PEEP],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },{
          title: '吸入氧浓度 (FiO2)',
          number: {
            number: [patientData.FiO2],
            toFixed: 1,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        }
      ],
    }
  },
  
  mounted() {
    this.changeTiming()
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber()
      }, 3000)
    },
    changeNumber() {
      // Add null check before forEach
      this.someArray?.forEach(item => { 
        item.number.number[0] += ++index
        item.number = { ...item.number }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$box-width: 100%;
$box-height: 410px;

#centerLeft1 {
  padding: 8px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 2px;
    border-radius: 10px;
    .nine-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
      .item {
        border-radius: 6px;
        padding-top: 8px;
        margin-top: 8px;
        width: 32%;
        height: 70px;
        .dv-dig-flop {
          width: 170px;
          height: 38px;
        }
      }
    }
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
    color: white;
  }

  .bottom-data {
    .item-box {
      & > div {
        padding-right: 5px;
      }
      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
