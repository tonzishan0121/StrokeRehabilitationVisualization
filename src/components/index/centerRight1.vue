<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
        </span>
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
export default {
  data() {
    const fontSize = '20px';
    return {
      config: {
        header: [`<span style="font-size:${fontSize}">人员</span>`, `<span style="font-size:${fontSize}">床号</span>`, `<span style="font-size:${fontSize}">时间</span>`],
        data: [],
        rowNum: 8, //表格行数
        headerHeight: 30,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [58],
        align: ['center']
      }
    }
  },
  mounted() {
    const fontSize = '20px'; // 统一控制字体大小
    this.config.data = [
      [`<span style="font-size:${fontSize}">李丽</span>`, `<span style="font-size:${fontSize}">01</span>`, `<span style="font-size:${fontSize};color:rgb(0,255,0)">02:00</span>`],
      [`<span style="font-size:${fontSize}">孙强</span>`, `<span style="font-size:${fontSize}">02</span>`, `<span style="font-size:${fontSize};color:rgb(21,234,0)">03:00</span>`],
      [`<span style="font-size:${fontSize}">郑伟</span>`, `<span style="font-size:${fontSize}">03</span>`, `<span style="font-size:${fontSize};color:rgb(42,213,0)">04:00</span>`],
      [`<span style="font-size:${fontSize}">李勇</span>`, `<span style="font-size:${fontSize}">04</span>`, `<span style="font-size:${fontSize};color:rgb(63,192,0)">05:00</span>`],
      [`<span style="font-size:${fontSize}">王杰</span>`, `<span style="font-size:${fontSize}">05</span>`, `<span style="font-size:${fontSize};color:rgb(85,170,0)">06:00</span>`],
      [`<span style="font-size:${fontSize}">赵杰</span>`, `<span style="font-size:${fontSize}">06</span>`, `<span style="font-size:${fontSize};color:rgb(106,149,0)">07:00</span>`],
      [`<span style="font-size:${fontSize}">李杰</span>`, `<span style="font-size:${fontSize}">07</span>`, `<span style="font-size:${fontSize};color:rgb(127,128,0)">08:00</span>`],
      [`<span style="font-size:${fontSize}">李芳</span>`, `<span style="font-size:${fontSize}">08</span>`, `<span style="font-size:${fontSize};color:rgb(148,107,0)">09:00</span>`],
      [`<span style="font-size:${fontSize}">钱伟</span>`, `<span style="font-size:${fontSize}">09</span>`, `<span style="font-size:${fontSize};color:rgb(170,85,0)">10:00</span>`],
      [`<span style="font-size:${fontSize}">吴娜</span>`, `<span style="font-size:${fontSize}">10</span>`, `<span style="font-size:${fontSize};color:rgb(191,64,0)">11:00</span>`],
      [`<span style="font-size:${fontSize}">孙杰</span>`, `<span style="font-size:${fontSize}">11</span>`, `<span style="font-size:${fontSize};color:rgb(212,43,0)">12:00</span>`],
      [`<span style="font-size:${fontSize}">王芳</span>`, `<span style="font-size:${fontSize}">12</span>`, `<span style="font-size:${fontSize};color:rgb(233,22,0)">13:00</span>`],
      [`<span style="font-size:${fontSize}">郑芳</span>`, `<span style="font-size:${fontSize}">13</span>`, `<span style="font-size:${fontSize};color:rgb(255,0,0)">14:00</span>`],
      [`<span style="font-size:${fontSize}">王伟</span>`, `<span style="font-size:${fontSize}">14</span>`, `<span style="font-size:${fontSize};color:rgb(234,21,0)">15:00</span>`],
      [`<span style="font-size:${fontSize}">郑娜</span>`, `<span style="font-size:${fontSize}">15</span>`, `<span style="font-size:${fontSize};color:rgb(213,42,0)">16:00</span>`],
      [`<span style="font-size:${fontSize}">周勇</span>`, `<span style="font-size:${fontSize}">16</span>`, `<span style="font-size:${fontSize};color:rgb(192,63,0)">17:00</span>`],
      [`<span style="font-size:${fontSize}">王伟</span>`, `<span style="font-size:${fontSize}">17</span>`, `<span style="font-size:${fontSize};color:rgb(170,85,0)">18:00</span>`],
      [`<span style="font-size:${fontSize}">王丽</span>`, `<span style="font-size:${fontSize}">18</span>`, `<span style="font-size:${fontSize};color:rgb(149,106,0)">19:00</span>`],
      [`<span style="font-size:${fontSize}">郑勇</span>`, `<span style="font-size:${fontSize}">19</span>`, `<span style="font-size:${fontSize};color:rgb(128,127,0)">20:00</span>`],
      [`<span style="font-size:${fontSize}">郑伟</span>`, `<span style="font-size:${fontSize}">20</span>`, `<span style="font-size:${fontSize};color:rgb(107,148,0)">21:00</span>`],
      [`<span style="font-size:${fontSize}">吴芳</span>`, `<span style="font-size:${fontSize}">21</span>`, `<span style="font-size:${fontSize};color:rgb(85,170,0)">22:00</span>`],
      [`<span style="font-size:${fontSize}">赵杰</span>`, `<span style="font-size:${fontSize}">22</span>`, `<span style="font-size:${fontSize};color:rgb(64,191,0)">23:00</span>`],
      [`<span style="font-size:${fontSize}">赵敏</span>`, `<span style="font-size:${fontSize}">23</span>`, `<span style="font-size:${fontSize};color:rgb(43,212,0)">00:00</span>`],
      [`<span style="font-size:${fontSize}">周敏</span>`, `<span style="font-size:${fontSize}">24</span>`, `<span style="font-size:${fontSize};color:rgb(22,233,0)">01:00</span>`]
    ];
  },
}
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 100%;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
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
    overflow: hidden;
    .dv-scr-board {
      width: 310px;
      height: 400px;
    }
  }
}
</style>
