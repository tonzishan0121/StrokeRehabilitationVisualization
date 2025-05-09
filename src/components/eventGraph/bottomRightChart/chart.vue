<template>
  <div ref="networkContainer" class="network-container"></div>
</template>

<script>
import { Network } from 'vis-network';
import 'vis-network/styles/vis-network.css';
import { requestf,apiConfig } from '../../../utils/apiConfig';

export default {
  name: 'VisNetwork',
  props: {
    nodes: {
      type: Array,
      default: () => [{ id: 1, label: "血栓",  group: 0, opacity: 1 },
  { id: 2, label: "D-二聚体",  group: 1, opacity: 1 },
  { id: 3, label: "改良Wells评分",  group: 1, opacity: 1 },
  { id: 4, label: "血管超声",  group: 1, opacity: 1 },
  { id: 5, label: "去除诱发血栓因素",  group: 5, opacity: 1 },
  { id: 6, label: "肥胖",  group: 2, opacity: 1 },
  { id: 7, label: "昏迷",  group: 0, opacity: 1 },
  { id: 8, label: "长时间机械通气",  group: 2, opacity: 1},
  { id: 9, label: "预防性抗凝药物",  group: 5, opacity: 1},
  { id: 10, label: "普通肝素",  group: 3, opacity: 1 },
  { id: 11, label: "利伐沙班",  group: 3, opacity: 1 },
  { id: 12, label: "低分子肝素",  group: 3, opacity: 1},
  { id: 13, label: "脑栓塞",  group: 0, opacity: 1 },
  { id: 14, label: "房颤",  group: 0, opacity: 1 },
  { id: 15, label: "心电图（房颤）",  group: 1, opacity: 1 },
  { id: 16, label: "下腔静脉滤器",  group: 5, opacity: 1 },
  { id: 19, label: "局部溶栓治疗",  group: 5, opacity: 1 },
  { id: 20, label: "梯度加压袜",  group: 5, opacity: 1 },
  { id: 21, label: "弹力加压袜",  group: 5, opacity: 1 },
  { id: 22, label: "间隙性充压装置",  group: 5, opacity: 1 },
  { id: 23, label: "华法林",  group: 3, opacity: 1 },
  { id: 24, label: "发热",  group: 0, opacity: 1},
  { id: 25, label: "白细胞",  group: 1, opacity: 1},
  { id: 26, label: "胸部x线",  group: 1, opacity: 1},
  { id: 27, label: "肺部感染",  group: 0, opacity: 1},
  { id: 28, label: "物理降温",  group: 5, opacity: 1},
  { id: 29, label: "药物降温",  group: 5, opacity: 1},
  { id: 30, label: "吞咽障碍",  group: 2, opacity: 1},
  { id: 32, label: "意识障碍",  group: 2, opacity: 1},
  { id: 33, label: "年龄大于70岁",  group: 2, opacity: 1},
  { id: 34, label: "呼吸道管理",  group: 5, opacity: 1},
  { id: 35, label: "呼吸功能训练",  group: 5, opacity: 1},
  { id: 36, label: "抗生素药物",  group: 5, opacity: 1},
  { id: 37, label: "青霉素抗生素",  group: 3, opacity: 1},
  { id: 38, label: "四环素抗生素",  group: 3, opacity: 1},
  { id: 39, label: "呼吸喹诺酮类抗生素",  group: 3, opacity: 1},
  { id: 40, label: "大环内酯类抗生素",  group: 3, opacity: 1},
  { id: 41, label: "尿路感染",  group: 0, opacity: 1},
  { id: 42, label: "清洁间歇导尿",  group: 5, opacity: 1},
  { id: 43, label: "膀胱功能训练",  group: 5, opacity: 1},
  { id: 44, label: "感染",  group: 0, opacity: 1},
  { id: 45, label: "心肌损害",  group: 0, opacity: 1},
  { id: 46, label: "更换尿管、清洁尿道口",  group: 5, opacity: 1},
  { id: 47, label: "定期监测膀胱功能",  group: 5, opacity: 1},
  { id: 48, label: "物理因子治疗",  group: 5, opacity: 1},
  { id: 49, label: "体位变换训练",  group: 5, opacity: 1},
  { id: 50, label: "尿液培养",  group: 1, opacity: 1},
  { id: 51, label: "脑出血",  group: 0, opacity: 1},
  { id: 52, label: "脑栓塞",  group: 0, opacity: 1},
  { id: 53, label: "脑梗死",  group: 0, opacity: 1},
  { id: 54, label: "应激性溃疡",  group: 0, opacity: 1},
  { id: 55, label: "粪便检查",  group: 1, opacity: 1},
  { id: 56, label: "血红蛋白",  group: 1, opacity: 1},
  { id: 57, label: "胃镜检查",  group: 1, opacity: 1},
  { id: 58, label: "质子泵抑制剂",  group: 3, opacity: 1},
  { id: 59, label: "H2受体拮抗剂",  group: 3, opacity: 1},
  { id: 60, label: "胃黏膜保护剂",  group: 3, opacity: 1},
  { id: 61, label: "抗酸药",  group: 3, opacity: 1},
  { id: 62, label: "心肌酶学",  group: 0, opacity: 1},
  { id: 63, label: "肌酸磷酸激酶同工酶",  group: 1, opacity: 1},
  { id: 64, label: "肌钙蛋白-T",  group: 1, opacity: 1},
  { id: 65, label: "心肌损伤",  group: 0, opacity: 1},
  { id: 66, label: "溶栓治疗",  group: 5, opacity: 1},
  { id: 67, label: "抗炎治疗",  group: 5, opacity: 1},
  { id: 68, label: "心脏瓣膜手术",  group: 5, opacity: 1},
  { id: 69, label: "营养心肌",  group: 5, opacity: 1},
  { id: 70, label: "改善心肌代谢",  group: 5, opacity: 1},
  { id: 71, label: "电解质",  group: 0, opacity: 1},
  { id: 72, label: "钾",  group: 0, opacity: 1},
  { id: 73, label: "钠",  group: 0, opacity: 1},
  { id: 74, label: "氯",  group: 0, opacity: 1},
  { id: 75, label: "镁",  group: 0, opacity: 1},
  { id: 76, label: "钙",  group: 0, opacity: 1},
  { id: 77, label: "高钾血症",  group: 0, opacity: 1},
  { id: 78, label: "低钾血症",  group: 0, opacity: 1},
  { id: 79, label: "利尿剂",  group: 3, opacity: 1},
  { id: 80, label: "碳酸氢钠",  group: 3, opacity: 1},
  { id: 81, label: "静推葡萄糖加胰岛素",  group: 5, opacity: 1},
  { id: 82, label: "舒喘灵喷雾剂",  group: 3, opacity: 1},
  { id: 83, label: "静脉补钾",  group: 5, opacity: 1},
  { id: 84, label: "高钠血症",  group: 0, opacity: 1},
  { id: 85, label: "低钠血症",  group: 0, opacity: 1},
  { id: 86, label: "注射氯化钠溶液",  group: 5, opacity: 1},
  { id: 87, label: "注射右旋糖酐溶液加氯化钠溶液",  group: 5, opacity: 1},
  { id: 88, label: "高钙血症",  group: 0, opacity: 1},
  { id: 89, label: "低钙血症",  group: 0, opacity: 1},
  { id: 90, label: "静推氯化钙溶液",  group: 5, opacity: 1},
  { id: 91, label: "静脉滴注成分钙",  group: 5, opacity: 1},
  { id: 92, label: "肝肾功能",  group: 0, opacity: 1},
  { id: 93, label: "总胆红",  group: 1, opacity: 1},
  { id: 94, label: "白蛋白",  group: 1, opacity: 1},
  { id: 95, label: "肌酐",  group: 1, opacity: 1},
  { id: 96, label: "尿素氮",  group: 1, opacity: 1},
  { id: 97, label: "谷丙转氨酶",  group: 1, opacity: 1},
  { id: 98, label: "肝功能异常",  group: 0, opacity: 1},
  { id: 99, label: "肾功能不全",  group: 0, opacity: 1},
  { id: 100, label: "炎性指标",  group: 0, opacity: 1},
  { id: 101, label: "白细胞介素-2",  group: 1, opacity: 1},
  { id: 102, label: "C反应蛋白",  group: 1, opacity: 1},
  { id: 103, label: "无菌性炎症",  group: 0, opacity: 1},
  { id: 106, label: "降低颅内压",  group: 5, opacity: 1},
  { id: 107, label: "脑水肿",  group: 0, opacity: 1},
  { id: 108, label: "甘露醇",  group: 3, opacity: 1},
  { id: 109, label: "甲磺酸去铁胺",  group: 3, opacity: 1},
  { id: 110, label: "血脂",  group: 0, opacity: 1},
  { id: 111, label: "甘油三酯",  group: 1, opacity: 1},
  { id: 112, label: "脂蛋白",  group: 1, opacity: 1},
  { id: 113, label: "他汀类药物",  group: 3, opacity: 1},
  { id: 114, label: "非他汀类药物",  group: 3, opacity: 1},
  { id: 115, label: "神经功能恶化",  group: 0, opacity: 1},
  { id: 117, label: "镇静",  group: 0, opacity: 1},
  { id: 118, label: "修订昏迷恢复量表",  group: 1, opacity: 1},
  { id: 119, label: "Richmond躁动-镇静量表",  group: 1, opacity: 1},
  { id: 120, label: "头部CT",  group: 1, opacity: 1},
  { id: 121, label: "运动功能障碍",  group: 0, opacity: 1},
  { id: 122, label: "充血性心力衰竭",  group: 0, opacity: 1},
  { id: 124, label: "进展性脑卒中",  group: 0, opacity: 1},
  { id: 125, label: "出血转化",  group: 0, opacity: 1},
  { id: 126, label: "促醒药物",  group: 3, opacity: 1},
  { id: 127, label: "中医促醒",  group: 5, opacity: 1},
  { id: 128, label: "镇静药物",  group: 3, opacity: 1},
  { id: 129, label: "高压氧治疗",  group: 5, opacity: 1},
  { id: 130, label: "血糖",  group: 0, opacity: 1},
  { id: 131, label: "高血糖",  group: 0, opacity: 1},
  { id: 132, label: "低血糖",  group: 0, opacity: 1},
  { id: 133, label: "死亡",  group: 0, opacity: 1},
  { id: 134, label: "转归不良",  group: 0, opacity: 1},
  { id: 135, label: "缺血性脑损伤",  group: 0, opacity: 1},
  { id: 136, label: "胰岛素",  group: 3, opacity: 1},
  { id: 137, label: "注射葡萄糖溶液",  group: 5, opacity: 1},
  { id: 138, label: "高血压",  group: 0, opacity: 1},
  { id: 139, label: "出血风险",  group: 0, opacity: 1},
  { id: 140, label: "强化降压联合溶栓治疗",  group: 5, opacity: 1},
  { id: 141, label: "静脉抗高血压药物",  group: 5, opacity: 1}
]
    },
    edges: {
      type: Array,
      default: () => [
      { from: 9, to: 23 , label: "使用药物" ,   arrows: "to" },
  { from: 9, to: 11 , label: "使用药物" ,     arrows: "to" },
  { from: 9, to: 12 , label: "使用药物" ,       arrows: "to" },
  { from: 9, to: 10, label: "使用药物" ,         arrows: "to" },
  { from: 13, to: 14 , label: "伴随并发" ,   arrows: "to" },
  { from: 14, to: 15 , label: "进行检查" ,   arrows: "to" },
  { from: 15, to: 1 , label: "增加风险" ,   arrows: "to" },
  { from: 15, to: 9, label: "预防" ,   arrows: "to" },
  { from: 1, to: 2 , label: "进行检查" ,   arrows: "to" },
  { from: 1, to: 3, label: "进行检查" ,   arrows: "to" },
  { from: 2, to: 4 , label: "增加检查" ,  arrows: "to" },
  { from: 3, to: 4 , label: "增加检查" ,  arrows: "to" },
  //{ from: 4, to: 17 ,    arrows: "to" },
  //{ from: 4, to: 18 , label: "阴性应对措施" ,   arrows: "to" },
  { from: 4, to: 22 , label: "阴性应对措施" ,   arrows: "to" },
  { from: 4, to: 21, label: "阴性应对措施" ,   arrows: "to" },
  { from: 4, to: 20, label: "阴性应对措施" ,   arrows: "to" },
  { from: 4, to: 19 ,label: "阳性应对措施" ,    arrows: "to" },
  { from: 4, to: 16 ,label: "阳性应对措施" ,    arrows: "to" },
  
  { from: 2, to: 5, label: "无风险" ,   arrows: "to" },
  { from: 3, to: 5 , label: "无风险" ,   arrows: "to" },
  { from: 5, to: 20 , label: "应对措施" ,   arrows: "to" },
  { from: 5, to: 22, label: "应对措施" ,   arrows: "to" },
  { from: 5, to: 21, label: "应对措施" ,   arrows: "to" },
  { from: 6, to: 1, label: "增加风险" ,  arrows: "to" },
  { from: 7, to: 1, label: "增加风险" ,  arrows: "to" },
  { from: 8, to: 1, label: "增加风险" ,  arrows: "to" },
  { from: 6, to: 9, label: "预防" ,   arrows: "to" },
  { from: 7, to: 9, label: "预防" ,   arrows: "to" },
  { from: 8, to: 9, label: "预防" ,   arrows: "to" },
  //发热相关  
  { from: 24, to: 25, label: "进行检查" ,   arrows: "to" },
  { from: 25, to: 27 , label: "伴随并发" ,   arrows: "to" },
  { from: 8 , to: 27 , label: "增加风险" ,  arrows: "to" },
  { from: 30 , to: 27 , label: "增加风险" ,  arrows: "to" },
  { from: 32, to: 27 , label: "增加风险" ,  arrows: "to" },
  { from: 33, to: 27, label: "增加风险" ,  arrows: "to" },
  { from: 27, to: 36, label: "治疗药物" ,   arrows: "to" },
  { from: 36, to: 37, label: "使用药物" ,   arrows: "to" },
  { from: 36, to: 38, label: "使用药物" ,   arrows: "to" },
  { from: 36, to: 39, label: "使用药物" ,   arrows: "to" },
 { from: 36, to: 40, label: "使用药物" ,   arrows: "to" },
  { from: 27, to: 34, label: "应对措施" ,   arrows: "to" },
  { from: 27, to: 35, label: "应对措施" ,   arrows: "to" },
  { from: 25, to: 26, label: "增加检查" ,  arrows: "to" },
  { from: 25, to: 28, label: "应对措施" ,   arrows: "to" },
  { from: 25, to: 29, label: "应对措施" ,   arrows: "to" },
  { from: 26, to: 27, label: "增加风险" ,  arrows: "to" },
  
    //20241212
  { from: 41, to: 36, label: "使用药物" ,   arrows: "to" },
  { from: 41, to: 46 , label: "应对措施" ,   arrows: "to" },
  { from: 41 , to: 47 , label: "应对措施" ,  arrows: "to" },
  { from: 41 , to: 48 , label: "应对措施" ,  arrows: "to" },
  { from: 41, to: 49 , label: "应对措施" ,  arrows: "to" },
  { from: 42, to: 41, label: "预防" ,  arrows: "to" },
  { from: 43, to: 41, label: "预防" ,   arrows: "to" },
  { from: 44, to: 50, label: "增加检查" ,   arrows: "to" },

  { from: 51, to: 54, label: "增加风险" ,   arrows: "to" },
  { from: 52, to: 54, label: "增加风险" ,   arrows: "to" },
  { from: 53, to: 54, label: "增加风险" ,   arrows: "to" },
  { from: 54, to: 55, label: "进行检查" ,   arrows: "to"},
  { from: 54, to: 56, label: "进行检查" ,   arrows: "to" },
  { from: 55, to: 57, label: "增加检查" ,  arrows: "to" },
  { from: 56, to: 57, label: "增加检查" ,   arrows: "to" },
  { from: 57, to: 58, label: "使用药物" ,   arrows: "to" },
  { from: 57, to: 59, label: "使用药物" ,  arrows: "to" },
  { from: 57, to: 60, label: "使用药物" ,   arrows: "to" },
  { from: 57, to: 61, label: "使用药物" ,  arrows: "to" },

  { from: 62, to: 63, label: "进行检查" ,   arrows: "to" },
  { from: 62, to: 64, label: "进行检查" ,   arrows: "to" },
  { from: 63, to: 45, label: "增加风险" ,   arrows: "to" },
  { from: 64, to: 65, label: "增加风险" ,   arrows: "to" },
  { from: 65, to: 66, label: "应对措施" ,   arrows: "to" },
  { from: 65, to: 67, label: "应对措施" ,  arrows: "to" },
  { from: 65, to: 68, label: "应对措施" ,   arrows: "to" },
  { from: 45, to: 69, label: "应对措施" ,   arrows: "to" },
  { from: 45, to: 70, label: "应对措施" ,  arrows: "to" },

  { from: 71, to: 72, label: "进行检查" ,   arrows: "to" },
  { from: 71, to: 73, label: "进行检查" ,  arrows: "to" },
  { from: 71, to: 74, label: "进行检查" ,   arrows: "to" },
  { from: 71, to: 75, label: "进行检查" ,   arrows: "to" },
  { from: 71, to: 76, label: "进行检查" ,   arrows: "to" },
  { from: 72, to: 77, label: "增加风险" ,   arrows: "to" },
  { from: 72, to: 78, label: "增加风险" ,   arrows: "to" },
  { from: 77, to: 79, label: "应对措施" ,  arrows: "to" },
  { from: 77, to: 80, label: "应对措施" ,   arrows: "to" },
  { from: 77, to: 81, label: "应对措施" ,   arrows: "to" },
  { from: 77, to: 82, label: "应对措施" ,  arrows: "to" },
  { from: 78, to: 83, label: "应对措施" ,   arrows: "to" },
  { from: 73, to: 84, label: "增加风险" ,   arrows: "to" },
  { from: 73, to: 85, label: "增加风险" ,   arrows: "to" },
  { from: 84, to: 86, label: "应对措施" ,   arrows: "to" },
  { from: 84, to: 87, label: "应对措施" ,   arrows: "to" },
  { from: 85, to: 86, label: "应对措施" ,  arrows: "to" },
  { from: 76, to: 88, label: "增加检查" ,   arrows: "to" },
  { from: 76, to: 89, label: "使用药物" ,   arrows: "to" },
  { from: 88, to: 86, label: "使用药物" ,  arrows: "to" },
  { from: 89, to: 90, label: "进行检查" ,   arrows: "to" },
  { from: 89, to: 91, label: "进行检查" ,  arrows: "to" },
  
  { from: 92, to: 93, label: "进行检查" ,   arrows: "to" },
  { from: 92, to: 94, label: "进行检查" ,   arrows: "to"},
  { from: 92, to: 95, label: "进行检查" ,   arrows: "to"},
  { from: 92, to: 96, label: "进行检查" ,   arrows: "to"},
  { from: 92, to: 97, label: "进行检查" ,   arrows: "to"},
  { from: 93, to: 98, label: "增加风险" ,  arrows: "to"},
  { from: 94, to: 98, label: "增加风险" ,   arrows: "to"},
  { from: 95, to: 99, label: "增加风险" ,   arrows: "to"},
  { from: 96, to: 99, label: "增加风险" ,  arrows: "to"},
  { from: 97, to: 98, label: "增加风险" ,   arrows: "to"},

  { from: 100, to: 101, label: "进行检查" ,   arrows: "to"},
  { from: 100, to: 102, label: "进行检查" ,   arrows: "to"},
  { from: 101, to: 44, label: "应对措施" ,   arrows: "to"},
  { from: 102, to: 44, label: "应对措施" ,   arrows: "to"},
  { from: 102, to: 103, label: "应对措施" ,  arrows: "to"},  
  { from: 44, to: 24, label: "增加风险" ,   arrows: "to"},

  { from: 104, to: 107, label: "增加风险" ,  arrows: "to"},
  { from: 138, to: 107, label: "增加风险" ,   arrows: "to"},
  { from: 106, to: 107, label: "预防" ,   arrows: "to"},
  { from: 107, to: 108, label: "使用药物" ,   arrows: "to"},
  { from: 107, to: 109, label: "使用药物" ,   arrows: "to"},

  { from: 110, to: 111, label: "进行检查" ,   arrows: "to"},
  { from: 110, to: 112, label: "进行检查" ,  arrows: "to"},
  { from: 111, to: 53, label: "增加风险" ,   arrows: "to"},
  { from: 112, to: 51, label: "增加风险" ,   arrows: "to"},
  { from: 112, to: 53, label: "增加风险" ,  arrows: "to"},
  { from: 111, to: 51, label: "增加风险" ,   arrows: "to"},
  { from: 111, to: 113, label: "使用药物" ,   arrows: "to"},
  { from: 112, to: 113, label: "使用药物" ,   arrows: "to"},
  { from: 111, to: 114, label: "使用药物" ,   arrows: "to"},
  { from: 112, to: 114, label: "使用药物" ,   arrows: "to"},
  { from: 111, to: 115, label: "增加风险" ,  arrows: "to"},

  { from: 7, to: 118, label: "进行检查" ,   arrows: "to"},
  { from: 117, to: 119, label: "进行检查" ,  arrows: "to"},
  { from: 118, to: 120, label: "增加检查" ,   arrows: "to"},
  { from: 119, to: 120, label: "增加检查" ,   arrows: "to"},
  { from: 120, to: 124, label: "增加风险" ,  arrows: "to"},
  { from: 120, to: 125, label: "增加风险" ,   arrows: "to"},
  { from: 120, to: 107, label: "增加风险" ,   arrows: "to"},
  { from: 121, to: 7, label: "增加风险" ,   arrows: "to"},
  { from: 122, to: 7, label: "增加风险" ,   arrows: "to"},
  { from: 6, to: 7, label: "增加风险" ,   arrows: "to"},
  { from: 1, to: 7, label: "增加风险" ,  arrows: "to"}, 
  { from: 121, to: 117, label: "增加风险" ,   arrows: "to"},
  { from: 122, to: 117, label: "增加风险" ,  arrows: "to"},
  { from: 6, to: 117, label: "增加风险" ,   arrows: "to"},
  { from: 1, to: 117, label: "增加风险" ,   arrows: "to"},
  { from: 118, to: 126, label: "使用药物" ,  arrows: "to"},
  { from: 118, to: 127, label: "应对措施" ,   arrows: "to"},
  { from: 118, to: 48, label: "应对措施" ,   arrows: "to"},
  { from: 118, to: 129, label: "应对措施" ,   arrows: "to"},
  { from: 119, to: 128, label: "使用药物" ,   arrows: "to"},

  { from: 130, to: 131, label: "增加风险" ,   arrows: "to"},
  { from: 130, to: 132, label: "增加风险" ,  arrows: "to"},
  { from: 131, to: 133, label: "增加风险" ,   arrows: "to"},
  { from: 131, to: 134, label: "增加风险" ,  arrows: "to"},
  { from: 132, to: 135, label: "增加风险" ,   arrows: "to"},
  { from: 132, to: 107, label: "增加风险" ,   arrows: "to"},
  { from: 131, to: 136, label: "使用药物" ,  arrows: "to"},
  { from: 132, to: 137, label: "增加风险" ,   arrows: "to"},
  { from: 138, to: 139, label: "增加风险" ,   arrows: "to"},
  { from: 138, to: 140, label: "使用药物" ,   arrows: "to"},
  { from: 138, to: 141, label: "使用药物" ,   arrows: "to"},
      ]
    },
    options: {
      type: Object,
      default: () => ({
        nodes: {
          shape: 'dot',
          size: 16,
          font: {
            size: 14,
            color: "white",
          }
        },
        edges: {
          width: 2,
          smooth: true
        }
        /*physics: {
      stabilization: true,
      wind: { x: 0, y: 0 },
    },
    physics: {
          enabled: false   
        }
    */
        
        
      })
    }
  },
  data() {
    return {
      network: null
    };
  },
  watch: {
    nodes: {
      handler(newNodes) {
        if (this.network) {
          this.network.setData({ nodes: newNodes, edges: this.edges });
        }
      },
      deep: true
    },
    edges: {
      handler(newEdges) {
        if (this.network) {
          this.network.setData({ nodes: this.nodes, edges: newEdges });
        }
      },
      deep: true
    }
  },
  mounted() {
    this.initializeNetwork();
  },
  beforeUnmount() {
    if (this.network) {
      this.network.destroy();
    }
  },
  methods: {
    
  // 判断多项生理指标 + 诊断关键词,筛选节点
  filterNodesByAllConditions(sbp, glucose, sodium, potassium, calcium, 
                            diagnosisList, triglyceride, lipoprotein, 
                            creatinine, ureaNitrogen, totalBilirubin, 
                            albumin, alt, troponinT, ckmb, dDimer, 
                            mechanicalVentilationTime, crp, il2, 
                            temperature) {
    let nodesToDisplay = [];
    let nodes=[{ id: 1, label: "血栓",  group: 0, opacity: 1 },
  { id: 2, label: "D-二聚体",  group: 1, opacity: 1 },
  { id: 3, label: "改良Wells评分",  group: 1, opacity: 1 },
  { id: 4, label: "血管超声",  group: 1, opacity: 1 },
  { id: 5, label: "去除诱发血栓因素",  group: 5, opacity: 1 },
  { id: 6, label: "肥胖",  group: 2, opacity: 1 },
  { id: 7, label: "昏迷",  group: 0, opacity: 1 },
  { id: 8, label: "长时间机械通气",  group: 2, opacity: 1},
  { id: 9, label: "预防性抗凝药物",  group: 5, opacity: 1},
  { id: 10, label: "普通肝素",  group: 3, opacity: 1 },
  { id: 11, label: "利伐沙班",  group: 3, opacity: 1 },
  { id: 12, label: "低分子肝素",  group: 3, opacity: 1},
  { id: 13, label: "脑栓塞",  group: 0, opacity: 1 },
  { id: 14, label: "房颤",  group: 0, opacity: 1 },
  { id: 15, label: "心电图（房颤）",  group: 1, opacity: 1 },
  { id: 16, label: "下腔静脉滤器",  group: 5, opacity: 1 },
  { id: 19, label: "局部溶栓治疗",  group: 5, opacity: 1 },
  { id: 20, label: "梯度加压袜",  group: 5, opacity: 1 },
  { id: 21, label: "弹力加压袜",  group: 5, opacity: 1 },
  { id: 22, label: "间隙性充压装置",  group: 5, opacity: 1 },
  { id: 23, label: "华法林",  group: 3, opacity: 1 },
  { id: 24, label: "发热",  group: 0, opacity: 1},
  { id: 25, label: "白细胞",  group: 1, opacity: 1},
  { id: 26, label: "胸部x线",  group: 1, opacity: 1},
  { id: 27, label: "肺部感染",  group: 0, opacity: 1},
  { id: 28, label: "物理降温",  group: 5, opacity: 1},
  { id: 29, label: "药物降温",  group: 5, opacity: 1},
  { id: 30, label: "吞咽障碍",  group: 2, opacity: 1},
  { id: 32, label: "意识障碍",  group: 2, opacity: 1},
  { id: 33, label: "年龄大于70岁",  group: 2, opacity: 1},
  { id: 34, label: "呼吸道管理",  group: 5, opacity: 1},
  { id: 35, label: "呼吸功能训练",  group: 5, opacity: 1},
  { id: 36, label: "抗生素药物",  group: 5, opacity: 1},
  { id: 37, label: "青霉素抗生素",  group: 3, opacity: 1},
  { id: 38, label: "四环素抗生素",  group: 3, opacity: 1},
  { id: 39, label: "呼吸喹诺酮类抗生素",  group: 3, opacity: 1},
  { id: 40, label: "大环内酯类抗生素",  group: 3, opacity: 1},
  { id: 41, label: "尿路感染",  group: 0, opacity: 1},
  { id: 42, label: "清洁间歇导尿",  group: 5, opacity: 1},
  { id: 43, label: "膀胱功能训练",  group: 5, opacity: 1},
  { id: 44, label: "感染",  group: 0, opacity: 1},
  { id: 45, label: "心肌损害",  group: 0, opacity: 1},
  { id: 46, label: "更换尿管、清洁尿道口",  group: 5, opacity: 1},
  { id: 47, label: "定期监测膀胱功能",  group: 5, opacity: 1},
  { id: 48, label: "物理因子治疗",  group: 5, opacity: 1},
  { id: 49, label: "体位变换训练",  group: 5, opacity: 1},
  { id: 50, label: "尿液培养",  group: 1, opacity: 1},
  { id: 51, label: "脑出血",  group: 0, opacity: 1},
  { id: 52, label: "脑栓塞",  group: 0, opacity: 1},
  { id: 53, label: "脑梗死",  group: 0, opacity: 1},
  { id: 54, label: "应激性溃疡",  group: 0, opacity: 1},
  { id: 55, label: "粪便检查",  group: 1, opacity: 1},
  { id: 56, label: "血红蛋白",  group: 1, opacity: 1},
  { id: 57, label: "胃镜检查",  group: 1, opacity: 1},
  { id: 58, label: "质子泵抑制剂",  group: 3, opacity: 1},
  { id: 59, label: "H2受体拮抗剂",  group: 3, opacity: 1},
  { id: 60, label: "胃黏膜保护剂",  group: 3, opacity: 1},
  { id: 61, label: "抗酸药",  group: 3, opacity: 1},
  { id: 62, label: "心肌酶学",  group: 0, opacity: 1},
  { id: 63, label: "肌酸磷酸激酶同工酶",  group: 1, opacity: 1},
  { id: 64, label: "肌钙蛋白-T",  group: 1, opacity: 1},
  { id: 65, label: "心肌损伤",  group: 0, opacity: 1},
  { id: 66, label: "溶栓治疗",  group: 5, opacity: 1},
  { id: 67, label: "抗炎治疗",  group: 5, opacity: 1},
  { id: 68, label: "心脏瓣膜手术",  group: 5, opacity: 1},
  { id: 69, label: "营养心肌",  group: 5, opacity: 1},
  { id: 70, label: "改善心肌代谢",  group: 5, opacity: 1},
  { id: 71, label: "电解质",  group: 0, opacity: 1},
  { id: 72, label: "钾",  group: 0, opacity: 1},
  { id: 73, label: "钠",  group: 0, opacity: 1},
  { id: 74, label: "氯",  group: 0, opacity: 1},
  { id: 75, label: "镁",  group: 0, opacity: 1},
  { id: 76, label: "钙",  group: 0, opacity: 1},
  { id: 77, label: "高钾血症",  group: 0, opacity: 1},
  { id: 78, label: "低钾血症",  group: 0, opacity: 1},
  { id: 79, label: "利尿剂",  group: 3, opacity: 1},
  { id: 80, label: "碳酸氢钠",  group: 3, opacity: 1},
  { id: 81, label: "静推葡萄糖加胰岛素",  group: 5, opacity: 1},
  { id: 82, label: "舒喘灵喷雾剂",  group: 3, opacity: 1},
  { id: 83, label: "静脉补钾",  group: 5, opacity: 1},
  { id: 84, label: "高钠血症",  group: 0, opacity: 1},
  { id: 85, label: "低钠血症",  group: 0, opacity: 1},
  { id: 86, label: "注射氯化钠溶液",  group: 5, opacity: 1},
  { id: 87, label: "注射右旋糖酐溶液加氯化钠溶液",  group: 5, opacity: 1},
  { id: 88, label: "高钙血症",  group: 0, opacity: 1},
  { id: 89, label: "低钙血症",  group: 0, opacity: 1},
  { id: 90, label: "静推氯化钙溶液",  group: 5, opacity: 1},
  { id: 91, label: "静脉滴注成分钙",  group: 5, opacity: 1},
  { id: 92, label: "肝肾功能",  group: 0, opacity: 1},
  { id: 93, label: "总胆红",  group: 1, opacity: 1},
  { id: 94, label: "白蛋白",  group: 1, opacity: 1},
  { id: 95, label: "肌酐",  group: 1, opacity: 1},
  { id: 96, label: "尿素氮",  group: 1, opacity: 1},
  { id: 97, label: "谷丙转氨酶",  group: 1, opacity: 1},
  { id: 98, label: "肝功能异常",  group: 0, opacity: 1},
  { id: 99, label: "肾功能不全",  group: 0, opacity: 1},
  { id: 100, label: "炎性指标",  group: 0, opacity: 1},
  { id: 101, label: "白细胞介素-2",  group: 1, opacity: 1},
  { id: 102, label: "C反应蛋白",  group: 1, opacity: 1},
  { id: 103, label: "无菌性炎症",  group: 0, opacity: 1},
  { id: 106, label: "降低颅内压",  group: 5, opacity: 1},
  { id: 107, label: "脑水肿",  group: 0, opacity: 1},
  { id: 108, label: "甘露醇",  group: 3, opacity: 1},
  { id: 109, label: "甲磺酸去铁胺",  group: 3, opacity: 1},
  { id: 110, label: "血脂",  group: 0, opacity: 1},
  { id: 111, label: "甘油三酯",  group: 1, opacity: 1},
  { id: 112, label: "脂蛋白",  group: 1, opacity: 1},
  { id: 113, label: "他汀类药物",  group: 3, opacity: 1},
  { id: 114, label: "非他汀类药物",  group: 3, opacity: 1},
  { id: 115, label: "神经功能恶化",  group: 0, opacity: 1},
  { id: 117, label: "镇静",  group: 0, opacity: 1},
  { id: 118, label: "修订昏迷恢复量表",  group: 1, opacity: 1},
  { id: 119, label: "Richmond躁动-镇静量表",  group: 1, opacity: 1},
  { id: 120, label: "头部CT",  group: 1, opacity: 1},
  { id: 121, label: "运动功能障碍",  group: 0, opacity: 1},
  { id: 122, label: "充血性心力衰竭",  group: 0, opacity: 1},
  { id: 124, label: "进展性脑卒中",  group: 0, opacity: 1},
  { id: 125, label: "出血转化",  group: 0, opacity: 1},
  { id: 126, label: "促醒药物",  group: 3, opacity: 1},
  { id: 127, label: "中医促醒",  group: 5, opacity: 1},
  { id: 128, label: "镇静药物",  group: 3, opacity: 1},
  { id: 129, label: "高压氧治疗",  group: 5, opacity: 1},
  { id: 130, label: "血糖",  group: 0, opacity: 1},
  { id: 131, label: "高血糖",  group: 0, opacity: 1},
  { id: 132, label: "低血糖",  group: 0, opacity: 1},
  { id: 133, label: "死亡",  group: 0, opacity: 1},
  { id: 134, label: "转归不良",  group: 0, opacity: 1},
  { id: 135, label: "缺血性脑损伤",  group: 0, opacity: 1},
  { id: 136, label: "胰岛素",  group: 3, opacity: 1},
  { id: 137, label: "注射葡萄糖溶液",  group: 5, opacity: 1},
  { id: 138, label: "高血压",  group: 0, opacity: 1},
  { id: 139, label: "出血风险",  group: 0, opacity: 1},
  { id: 140, label: "强化降压联合溶栓治疗",  group: 5, opacity: 1},
  { id: 141, label: "静脉抗高血压药物",  group: 5, opacity: 1}
]
  
    // 高血压
    if (sbp > 140) {
      console.log("举头望明月2"+this.nodes.filter(node =>
        [138, 139, 140, 141].includes(node.id)
      ));
      console.log("举头望明月1"+this.nodes.filter(node =>
        [138, 139, 140, 141].includes(node.id)
      ));
      nodesToDisplay = this.nodes.filter(node =>
        [138, 139, 140, 141].includes(node.id)
      );
      console.log("举头望明月"+nodesToDisplay);
    }

    // 高血糖（> 8.3）
    if (glucose > 8.3) {
      const glucoseNodes = this.nodes.filter(node =>
        [130, 131, 133, 134, 136, 140].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...glucoseNodes];
    }

    // 低血糖（≤ 3.0）
    if (glucose <= 3.0) {
      const hypoGlucoseNodes = this.nodes.filter(node =>
        [130, 132, 135, 137, 107, 108, 109].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hypoGlucoseNodes];
    }

    // 低血钠（≤ 135）
    if (sodium <= 135) {
      const hypoSodiumNodes = this.nodes.filter(node =>
        [71, 73, 85, 86].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hypoSodiumNodes];
    }

    // 高血钠（≥ 145）
    if (sodium >= 145) {
      const hyperSodiumNodes = this.nodes.filter(node =>
        [71, 73, 84, 87].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hyperSodiumNodes];
    }

    // 低血钾（≤ 3.5）
    if (potassium <= 3.5) {
      const hypoPotassiumNodes = this.nodes.filter(node =>
        [71, 78, 83].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hypoPotassiumNodes];
    }

    // 高血钾（≥ 5.5）
    if (potassium >= 5.5) {
      const hyperPotassiumNodes = this.nodes.filter(node =>
        [71, 72, 77, 79, 80, 81, 82].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hyperPotassiumNodes];
    }

    // 低血钙（≤ 2.1）
    if (calcium <= 2.1) {
      const hypoCalciumNodes = this.nodes.filter(node =>
        [71, 76, 89, 90, 91].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hypoCalciumNodes];
    }

    // 高血钙（≥ 2.6）
    if (calcium >= 2.6) {
      const hyperCalciumNodes = this.nodes.filter(node =>
        [71, 76, 88, 86].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...hyperCalciumNodes];
    }

    // 判断诊断字符串是否包含“脑栓塞”、“脑梗死”或“脑出血”
    if (
      diagnosisList.includes('脑栓塞') ||
      diagnosisList.includes('脑梗死') ||
      diagnosisList.includes('脑出血')
    ) {
      const strokeNodes = this.nodes.filter(node =>
        [54, 55, 56, 57, 58, 59, 60, 61].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...strokeNodes];
    }

// 判断患者的诊断列表是否包含 "脑水肿"
if (diagnosisList.includes("脑水肿")) {
  const cerebralEdemaNodes = this.nodes.filter(node =>
    [107, 108, 109].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...cerebralEdemaNodes];
}

// 假设 diagnosisList 是患者的诊断列表,诊断列表是一个字符串数组
if (diagnosisList.includes('房颤')) {
  const atrialFibrillationNodes = this.nodes.filter(node =>
    [13, 14, 15, 9, 10, 11, 12, 23, 1, 117, 119, 120, 128, 124, 125, 107, 108, 109, 2, 3, 4, 5, 20, 21, 22, 16, 19].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...atrialFibrillationNodes];
}


	// 甘油三酯 > 5.6
    if (triglyceride > 5.6) {
      const highTGNodes = this.nodes.filter(node =>
        [110,111,115,114,113,53,51,54,55,56,57,58,59,60,61
].includes(node.id)
      );
      nodesToDisplay = [...nodesToDisplay, ...highTGNodes];
    }

	// 脂蛋白 > 1.3
if (lipoprotein > 1.3) {
  const highLipoproteinNodes = this.nodes.filter(node =>
    [110, 112, 114, 113, 53, 51, 54, 55, 56, 57, 58, 59, 60, 61].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...highLipoproteinNodes];
}


// 判断肌酐是否在62-115范围内
if (creatinine < 62 || creatinine > 115) {
  const creatinineNodes = this.nodes.filter(node =>
    [92, 95, 99].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...creatinineNodes];
}

// 判断尿素氮是否在2.9-7.1范围内
if (ureaNitrogen < 2.9 || ureaNitrogen > 7.1) {
  const ureaNitrogenNodes = this.nodes.filter(node =>
    [92, 96, 99].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...ureaNitrogenNodes];
}

// 判断总胆红素是否在5.1-19范围内
if (totalBilirubin < 5.1 || totalBilirubin > 19) {
  const totalBilirubinNodes = this.nodes.filter(node =>
    [93, 96, 98].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...totalBilirubinNodes];
}

// 判断白蛋白是否在35-50范围内
if (albumin < 35 || albumin > 50) {
  const albuminNodes = this.nodes.filter(node =>
    [94, 95, 98].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...albuminNodes];
}

// 判断谷丙转氨酶是否在7-56范围内
if (alt < 7 || alt > 56) {
  const altNodes = this.nodes.filter(node =>
    [97, 96, 98].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...altNodes];
}

// 判断肌钙蛋白-T是否大于0.01
if (troponinT > 0.01) {
  const troponinTNodes = this.nodes.filter(node =>
    [62, 64, 65, 66, 67, 68].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...troponinTNodes];
}

// 判断肌酸磷酸激酶同工酶是否大于5
if (ckmb > 5) {
  const ckmbNodes = this.nodes.filter(node =>
    [62, 63, 69, 70, 45].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...ckmbNodes];
}

// 假设 dDimer 变量是 D-二聚体的值
if (dDimer > 0.5) {
  const dDimerNodes = this.nodes.filter(node =>
    [1, 117, 119, 120, 128, 124, 125, 107, 108, 109, 2, 3, 4, 5, 20, 21, 22, 16, 19].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...dDimerNodes];
}

// 假设 mechanicalVentilationTime 变量是机械通气的时间（小时）
if (mechanicalVentilationTime > 72) {
  const ventilationNodes = this.nodes.filter(node =>
    [8, 1, 117, 119, 120, 128, 124, 125, 107, 108, 109, 2, 3, 4, 5, 20, 21, 22, 16, 19,
     9, 10, 11, 12, 23, 27, 34, 35, 36, 37, 38, 39, 40].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...ventilationNodes];
}

// 假设 crp 和 il2 分别是 C 反应蛋白和白介素2的值
if (crp > 200 || il2 > 15) {
  const crpIl2Nodes = this.nodes.filter(node =>
    [8, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 100, 101, 102, 103].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...crpIl2Nodes];
}

// 假设 temperature 是患者的体温
if (temperature > 39) {
  const highTempNodes = this.nodes.filter(node =>
    [24, 25, 28, 29, 26, 27, 34, 35, 36, 37, 38, 39, 40].includes(node.id)
  );
  nodesToDisplay = [...nodesToDisplay, ...highTempNodes];
}


    // 去重处理
    const uniqueNodesMap = new Map();
    nodesToDisplay.forEach(node => {
      uniqueNodesMap.set(node.id, node);
    });
    this.filteredNodes = Array.from(uniqueNodesMap.values());
    // 返回筛选后的节点
  return this.filteredNodes;
  },

    
    initializeNetwork() {
    const container = this.$refs.networkContainer;
    
    requestf(
      apiConfig.eventRoute,
      {
        patientId: localStorage.getItem("id")
      },
      'POST',
      (res) => {
        // 在回调函数中处理返回数据
        const cdata = {
          sbp: res.sbp || 0,
          glucose: res.glucose || 0,
          sodium: res.sodium || 0,
          potassium: res.potassium || 0,
          calcium: res.calcium || 0,
          diagnosisList: res.diagnosisList || [],
          triglyceride: res.triglyceride || 0,
          lipoprotein: res.lipoprotein || 0,
          creatinine: res.creatinine || 0,
          ureaNitrogen: res.ureaNitrogen || 0,
          totalBilirubin: res.totalBilirubin || 0,
          albumin: res.albumin || 0,
          alt: res.alt || 0,
          troponinT: res.troponinT || 0,
          ckmb: res.ckmb || 0,
          dDimer: res.dDimer || 0,
          mechanicalVentilationTime: res.mechanicalVentilationTime || 0,
          crp: res.crp || 0,
          il2: res.il2 || 0,
          temperature: res.temperature || 0
        };

        const nodesToDisplay = this.filterNodesByAllConditions(
          cdata.sbp,
          cdata.glucose,
          cdata.sodium,
          cdata.potassium,
          cdata.calcium,
          cdata.diagnosisList,
          cdata.triglyceride,
          cdata.lipoprotein,
          cdata.creatinine,
          cdata.ureaNitrogen,
          cdata.totalBilirubin,
          cdata.albumin,
          cdata.alt,
          cdata.troponinT,
          cdata.ckmb,
          cdata.dDimer,
          cdata.mechanicalVentilationTime,
          cdata.crp,
          cdata.il2,
          cdata.temperature
        );

        const data = {
          nodes: nodesToDisplay,
          edges: this.edges
        };
        
        this.network = new Network(container, data, this.options);
      }
    );
}
  }
  };
</script>

<style scoped>
.network-container {
  width: 100%;
  height: 350px;
  /*border: 1px solid #eee;*/
  border-radius: 4px;
  /*background-color: gray;*/
}
</style>