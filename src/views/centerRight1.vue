<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="display: flex;align-items: center;flex-direction: column; body-box">护理排班表</span>
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
    return {
      config: {
        header: ['人员', '编号', '时间'],
        data: [
          ['李丽', 'hs0001', '<span style="color:rgb(0,255,0)">02:00</span>'] ,
          ['孙强', 'hs0002', '<span style="color:rgb(21,234,0)">03:00</span>'] ,
          ['郑伟', 'hs0003', '<span style="color:rgb(42,213,0)">04:00</span>'] ,
          ['李勇', 'hs0004', '<span style="color:rgb(63,192,0)">05:00</span>'] ,
          ['王杰', 'hs0005', '<span style="color:rgb(85,170,0)">06:00</span>'] ,
          ['赵杰', 'hs0006', '<span style="color:rgb(106,149,0)">07:00</span>'] ,
          ['李杰', 'hs0007', '<span style="color:rgb(127,128,0)">08:00</span>'] ,
          ['李芳', 'hs0008', '<span style="color:rgb(148,107,0)">09:00</span>'] ,
          ['钱伟', 'hs0009', '<span style="color:rgb(170,85,0)">10:00</span>'] ,
          ['吴娜', 'hs0010', '<span style="color:rgb(191,64,0)">11:00</span>'] ,
          ['孙杰', 'hs0011', '<span style="color:rgb(212,43,0)">12:00</span>'] ,
          ['王芳', 'hs0012', '<span style="color:rgb(233,22,0)">13:00</span>'] ,
          ['郑芳', 'hs0013', '<span style="color:rgb(255,0,0)">14:00</span>'] ,
          ['王伟', 'hs0014', '<span style="color:rgb(234,21,0)">15:00</span>'] ,
          ['郑娜', 'hs0015', '<span style="color:rgb(213,42,0)">16:00</span>'] ,
          ['周勇', 'hs0016', '<span style="color:rgb(192,63,0)">17:00</span>'] ,
          ['王伟', 'hs0017', '<span style="color:rgb(170,85,0)">18:00</span>'] ,
          ['王丽', 'hs0018', '<span style="color:rgb(149,106,0)">19:00</span>'] ,
          ['郑勇', 'hs0019', '<span style="color:rgb(128,127,0)">20:00</span>'] ,
          ['郑伟', 'hs0020', '<span style="color:rgb(107,148,0)">21:00</span>'] ,
          ['吴芳', 'hs0021', '<span style="color:rgb(85,170,0)">22:00</span>'] ,
          ['赵杰', 'hs0022', '<span style="color:rgb(64,191,0)">23:00</span>'] ,
          ['赵敏', 'hs0023', '<span style="color:rgb(43,212,0)">00:00</span>'] ,
          ['周敏', 'hs0024', '<span style="color:rgb(22,233,0)">01:00</span>'] 
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
  }
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
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 2px;
    overflow: hidden;
    .dv-scr-board {
      width: 270px;
      height: 340px;
    }
  }
}
</style>
