<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <div class="d-flex">
          <span style="margin-left:0.75rem;color:white;font-size:22px;">康复治疗师排班表</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import {paibanbiao} from '../../common/dataSource'
export default {
  data() {
    let datas = [];

    return {
      fontSize:'20px',
      datas: datas,
    }
  },
  computed:{
    config() {
        const fontSize = this.fontSize;
        return {
          header: [`<span style="font-size:${fontSize}">治疗师</span>`, `<span style="font-size:${fontSize}">科室</span>`, `<span style="font-size:${fontSize}">时间</span>`],
          data: this.datas.map((item, index) => {
            const hour = (index + 1) % 24;
            const time = String(hour).padStart(2, '0') + ':00';
            return [
              `<span style="font-size:${fontSize}">${item.therapistName}</span>`,
              `<span style="font-size:18px">${item.department}</span>`,
              `<span style="font-size:${fontSize};color:${this.getRGBColorByTime(index)}">${time}</span>`
            ];
          }),
          rowNum: 8, //表格行数
          headerHeight: 30,
          headerBGC: '#0f1325', //表头
          oddRowBGC: '#0f1325', //奇数行
          evenRowBGC: '#171c33', //偶数行
          index: true,
          columnWidth: [58],
          align: ['center']
        };
    },
  },
  mounted() {
    this.datas = paibanbiao();
  },
  methods: {
    getRGBColorByTime: (t) => {
      // 确保时间t在0到23的范围内
      t = t % 24;

      // 初始化RGB分量
      let R = 0;
      let G = 0;
      let B = 0;

      // 从0点到12点：颜色从绿色过渡到红色
      if (t >= 0 && t < 12) {
          R = Math.round((t / 12) * 255); // 红色分量从0增加到255
          G = Math.round((1 - t / 12) * 255); // 绿色分量从255减少到0
      }
      // 从12点到24点：颜色从红色过渡到绿色
      else if (t >= 12 && t < 24) {
          R = Math.round((1 - (t - 12) / 12) * 255); // 红色分量从255减少到0
          G = Math.round(((t - 12) / 12) * 255); // 绿色分量从0增加到255
      }

      // 将RGB值转换为十六进制字符串
      const toHex = (value) => {
          const hex = value.toString(16);
          return hex.length === 1 ? `0${hex}` : hex;
      };
      const hexColor = `#${toHex(R)}${toHex(G)}${toHex(B)}`;
      return hexColor;
    }
  },
};
</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 100%;
#centerRight1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 2px;
    position: relative;
    top: 5px;
    height: 400px;
    .dv-scr-board {
      width: 310px;
      height: 400px;
    }
  }
}
</style>
