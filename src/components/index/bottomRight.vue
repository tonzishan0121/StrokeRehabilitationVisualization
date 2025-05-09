<template>
  <div id="bottomRight">
    <div class="bg-color-black">
     
        <div class="d-flex">
          <span style="margin-left:0.75rem;color:white;font-size:22px">{{tableName}}得分情况</span>
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:6rem;" />
          </div>
        </div>
      </div>
      <div>
        <BottomRightChart :chatName="tableName" :currentData="tableDataList[tableName]"/>
      </div>
      <div class="bottom-container">
        <button v-for="item in bottomList" @click="handleButtonClick(item)">
           {{ item }}
        </button>
      </div>
    
  </div>
</template>

<script>
import { apiConfig, requestf } from '../../utils/apiConfig';
import BottomRightChart from "../index/bottomRightChart/index.vue";

export default {
  components: {
    BottomRightChart
  },
  data() {
    return {
      tableName: "",
      bottomList : [
        "SQ5","FOIS","RASS","MMASA","BBS1","BBS2","BBS3","MRC"
      ],
      tableDataList: {}
    };        
  },
  methods: {
    handleButtonClick(index) {
      this.tableName = index;
    },
    tableNameAutoChange() {
      setInterval(() => {
        this.tableName = this.bottomList[Math.floor(Math.random() * this.bottomList.length)];
      }, 10000);
    }
  },
  beforeMount() {
    requestf(apiConfig.getscoreList,
      {"id":localStorage.getItem("id")},
      'POST',(res) => {
        this.tableDataList = res;
        this.handleButtonClick("MRC")
      });
  },
  mounted() {
    this.tableNameAutoChange();
  }
};
</script>

<style lang="scss" scoped>
$box-height: 400px;
$box-width: 100%;
#bottomRight {
  padding: 14px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }

  .bottom-container {
    position: absolute; 
    right: 20px; 
    top: 20px; 
    display: grid; 
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    button {
      padding: 6px 5px; // 增加按钮的内边距，使按钮更大
      font-size: 15px; // 增大按钮文字大小
      color: white; // 设置文字颜色
      background-color:rgb(35, 147, 238, 0.6); // 设置按钮背景颜色
      border: none; // 移除边框
      border-radius: 5px; // 添加圆角
      cursor: pointer; // 鼠标悬停时显示手型光标
      transition: background-color 0.3s; // 添加背景颜色过渡效果
  
      &:hover {
        background-color: #45a049; // 鼠标悬停时的背景颜色
      }
  
      &:active {
        background-color: #3e8e41; // 鼠标点击时的背景颜色
      }
    }
  } 

  .text {
    color: #c3cbde;
  }
  //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
  }

  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>