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
    const fontSize = '20px';
    const names = ['李丽', '孙强', '郑伟', '李勇', '王杰', '赵杰', '李杰', '李芳', '钱伟', '吴娜', '孙杰', '王芳', '郑芳', '王伟', '郑娜', '周勇', '王伟', '王丽', '郑勇', '郑伟', '吴芳', '赵杰', '赵敏', '周敏'];
    this.config.data = names.map((name, index) => {
      const bedNumber = String(index + 1).padStart(2, '0');
      const hour = (index + 2) % 24;
      const time = String(hour).padStart(2, '0') + ':00';
      const greenValue = 255 - (index * 11);
      const redValue = index * 11;
      const color = `rgb(${redValue > 255 ? 255 : redValue},${greenValue < 0 ? 0 : greenValue},0)`;
      return [
        `<span style="font-size:${fontSize}">${name}</span>`,
        `<span style="font-size:${fontSize}">${bedNumber}</span>`,
        `<span style="font-size:${fontSize};color:${color}">${time}</span>`
      ];
    });
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
    height: $box-height - 10px;
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
