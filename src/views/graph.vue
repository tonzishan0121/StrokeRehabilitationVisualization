<template>
  <CommonLayout>
    <div class="graph-box">
      <echartTimeline :date="sliderRef"></echartTimeline>
    </div>
    <div class="five-box">
      <dv-border-box-10 v-for="(_, index) in 5" :key="index">
        <rehabiliPlan 
          :title="exprehabitate[index]?.title" 
          :tips="exprehabitate[index]?.tips"
          :sections="exprehabitate[index]?.sections"
        />
      </dv-border-box-10>
    </div>
  </CommonLayout>
  <siderBar @sliderUpdated="sliderUpdated"></siderBar>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import echartTimeline from '../components/graph/echartTimeline.vue';
import rehabiliPlan from "../components/graph/rehabilitationPlan.vue";
import CommonLayout from "../components/CommonLayout.vue";
import { formatTime } from "../utils/index";
import siderBar from "../components/graph/siderBar.vue";

const exprehabData = [
        {
            title: "康复方案",
            tips: {
              title: 'Tips1：',
              content: "请仔细检查病人是否有严重的感染性疾病、近期心肌梗死、未控制的癫痫发作、大面积脑卒中急性期等康复训练禁忌症"
            },
            sections: [
              {
                title: "物理康复：",
                items: [
                  "平衡训练（单腿站立、闭目站立，每次保持 10 - 15 秒，重复 8 - 10 次，一日 3 次）",
                  "步行训练（借助平行杠、助行器逐步过渡到独立行走，每次 30 分钟，一日 2 - 3 次）",
                  "关节活动度训练（上肢、下肢各关节的屈伸、旋转，每个动作保持 15 - 30 秒，重复 10 - 15 次，一日 3 次）",
                  "肌力训练（利用弹力带、哑铃进行抗阻训练，根据肌力等级选择合适重量和重复次数，一般 3 - 4 组，每组 8 - 12 次，一日 2 次）"
                ]
              },
              {
                title: "作业康复：",
                items: [
                  "手功能训练（捏橡皮泥、穿珠子、拧瓶盖等精细动作，每次 20 - 30 分钟，一日 2 - 3 次）",
                  "认知训练（记忆游戏、数字排序、找不同等，根据认知水平调整难度，每次 20 - 30 分钟，一日 2 次）",
                  "日常生活活动训练（穿衣、进食、洗漱等模拟训练，结合实际情况进行个性化的指导和辅助，每次 30 - 45 分钟，一日 2 - 3 次）"
                ]
              },
              {
                title: "吞咽康复：",
                items: [
                  "口腔按摩（对唇部、颊部、舌部等部位进行轻柔按摩，每次 5 - 10 分钟，一日 3 次）",
                  "冰刺激（用冰棉签刺激软腭、咽壁等部位，每次 10 - 15 分钟，一日 2 - 3 次）",
                  "空吞咽训练（在进食前进行多次空吞咽，以提高吞咽反射的敏感度，每次 10 - 15 次，一日 3 - 5 次）"
                ]
              }
            ]
          },
        {
            title: "康复方案",
            tips: {
              title: 'Tips1：',
              content: "请仔细检查病人是否有未控制的高血压、糖尿病急性并发症等康复训练禁忌症"
            },
            sections: [
              {
                title: "物理康复：",
                items: [
                  "床上移动训练（翻身、坐起训练，每次 10 - 15 分钟，一日 3 次）",
                  "站立平衡训练（依靠扶持物进行站立平衡练习，每次 10 - 15 分钟，一日 2 次）"
                ]
              },
              {
                title: "作业康复：",
                items: [
                  "简单的手部抓握训练（利用小皮球等器材，每次抓握保持 3 - 5 秒，重复 10 - 15 次，一日 3 次）",
                  "注意力集中训练（如看图找物，每次 5 - 10 分钟，一日 2 次）"
                ]
              },
              {
                title: "吞咽康复：",
                items: [
                  "唇部闭合练习（吹气练习，每次 5 - 10 分钟，一日 3 次）",
                  "吞咽动作模拟训练（空吞咽配合点头动作，每次 10 - 15 次，一日 3 次）"
                ]
              }
            ]
          },
        {
            title: "康复方案",
            tips: {
              title: 'Tips1：',
              content:"请仔细检查病人是否有不稳定性骨折、急性手术、精神不稳定、不稳定性心律失常、活动性出血、气道不安全等康复训练禁忌症"
            },
            sections: [
              {
                title: "物理康复：",
                items: [
                  "被动运动训练（对上肢、下肢各关节进行缓慢的被动屈伸运动，每个关节活动 10 - 15 次，一日 3 次）",
                  "气道廓清技术（通过深呼吸、有效咳嗽等方法清除气道分泌物，每次练习 5 - 10 分钟，一日 3 次）",
                  "体位训练（保持良肢位，每 2 小时翻身一次，并进行适当的肢体摆放）"
                ]
              },
              {
                title: "作业康复：",
                items: [
                  "多感官刺激（视觉、听觉、触觉等多种感官刺激，如看图、听音乐、触摸不同材质的物品，每次 15 - 20 分钟，一日 2 次）",
                  "情感支持（渐进式放松、冥想，每次 10 - 15 分钟，一日 2 次）"
                ]
              },
              {
                title: "吞咽康复：",
                items: [
                  "感官刺激（对唇、颊、舌等部位进行软毛刷轻刷刺激，每次 5 - 10 分钟，一日 3 次）",
                  "电刺激（使用低频电刺激仪刺激咽喉部肌肉，根据耐受程度调整强度，每次 10 - 15 分钟，一日 2 次）"
                ]
              }
            ]
          },
        {
            title: "康复方案",
            tips: {
              title: 'Tips1：',
              content: "请仔细检查病人是否有未控制的心力衰竭、严重的肺部疾病、意识障碍等康复训练禁忌症"
            },
            sections: [
              {
                title: "物理康复：",
                items: [
                  "下肢肌肉按摩（促进血液循环，每次 10 - 15 分钟，一日 2 次）",
                  "坐位平衡训练（在椅子上进行简单的左右、前后重心转移训练，每次 10 - 15 分钟，一日 2 次）"
                ]
              },
              {
                title: "作业康复：",
                items: [
                  "简单的拼图游戏（锻炼认知和手眼协调能力，每次 10 - 15 分钟，一日 2 次）"
                ]
              },
              {
                title: "吞咽康复：",
                items: [
                  "舌部运动训练（伸舌、舔唇等动作，每次 5 - 10 分钟，一日 3 次）"
                ]
              }
            ]
          },
        {
            title: "康复方案",
            tips: {
              title: 'Tips1：',
              content: "请仔细检查病人是否有未控制的心律不齐、心肺复苏、心电 irregular 等康复训练禁忌症"
            },
            sections: [
              {
                title: "物理康复：",
                items: [
                  "被动运动训练（对上肢、下肢各关节进行缓慢的被动屈伸运动，每个关节活动 10 - 15 次，一日3 次）",
                  "气道廓清技术（通过深呼吸、有效咳嗽等方法清除气道分泌物，每次练习 5 - 10 分钟，一日 3 次）",
                  "体位训练（保持良肢位，每 2 小时翻身一次，并进行适当的肢体摆放）"
                ]
              },
              {
                title: "作业康复：",
                items: [
                  "多感官刺激（视觉、听觉、触觉等多种感官刺激，如看图、听音乐、触摸不同材质的物品，每次 15 - 20 分钟，一日 2 次）",
                  "情感支持（渐进式放松、冥想，每次 10 - 15 分钟，一日 2 次）"
                ]
              },
              {
                title: "吞咽康复：",
                items: [
                  "感官刺激（对唇、颊、舌等部位进行软毛刷轻刷刺激，每次 5 - 10 分钟，一日 3 次）"
                ]
              }
            ]
        }
      ];
export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000'],
      exprehabitate: [...exprehabData]
    }
  },

  components: {
    echartTimeline,
    rehabiliPlan,
    CommonLayout,
    siderBar
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    sliderUpdated(extractedNumber) {
      this.sliderRef=extractedNumber;
      const reverseArray = (array) => {
        return [...array].reverse(); // 创建新数组并反转
      };
      
      if (this.exprehabitate && Array.isArray(this.exprehabitate)) {
        this.exprehabitate = reverseArray(this.exprehabitate);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
  