<template>
  <dv-border-box-10>
    <div id="bottomLeft" >
      <div class="bg-color-black">
        <div class="d-flex pt-2 pl-2">
          <span class="d-flex">
           <span class="text"><b>基于事理图谱的并发症风险预测路径</b></span>

          <br/>
          <!-- 粉红色圆形 -->
          <div class="circle yellow-circle"></div>
          <span class="text">临床措施</span>

          <!-- 绿色圆形 -->
          <div class="circle red-circle"></div>
          <span class="text">药物</span>

          <!-- 红色圆形 -->
          <div class="circle pink-circle"></div>
          <span class="text">检查</span>

          <!-- 黄色圆形 -->
          <div class="circle green-circle"></div>
          <span class="text">风险因素</span>

          <!-- 蓝色圆形 -->
          <div class="circle blue-circle"></div>
          <span class="text">临床问题</span>

          <icon name="chart-bar" class="text-icon"></icon>
        </span>
          
        </div>
        <div>
          <BottomLeftChart />
        </div>
      </div>
    </div>
  </dv-border-box-10>
</template>


<script>
import BottomLeftChart from './bottomLeftChart/index.vue'

export default {
  components: {
    BottomLeftChart
  }
}
</script>

<style lang="scss" scoped>
$box-height: 460;
$box-width: 100;
#bottomLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 35px ;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
    font-size: 20px; /* 设置字体大小为 24px */
    margin-top: 0px;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
  
/* 使用 flexbox 使五个圆和文本横向排列 */
.d-flex {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    flex-wrap: wrap; /* 如果容器宽度不足，自动换行 */
    //width: 900px;
  }

/* 圆形样式 */
.circle {
  width: 30px; /* 圆形的大小 */
  height: 30px;
  margin-top: 2px;
  border-radius: 50%; /* 使其成为圆形 */
  margin-left: 15px; /* 圆形和文本之间的间距 */
}
/* 粉红色圆形 */
.pink-circle {
  background-color: #EB7DF4; /* 设置圆形颜色为粉红色 */
}

/* 绿色圆形 */
.green-circle {
  background-color: #7BE141; /* 设置圆形颜色为绿色 */
}
/* 红色圆形 */
.red-circle {
  background-color: #FB7E81; /* 设置圆形颜色为红色 */
}

/* 黄色圆形 */
.yellow-circle {
  background-color: #FFFF00; /* 设置圆形颜色为黄色 */
}

/* 蓝色圆形 */
.blue-circle {
  background-color: #97C2FC; /* 设置圆形颜色为蓝色 */
}
}
</style>