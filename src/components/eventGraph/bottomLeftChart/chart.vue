<template>
  <div ref="networkContainer" class="network-container"></div>
  
</template>

<script>
import { Network } from 'vis-network';
import 'vis-network/styles/vis-network.css';

export default {
  name: 'VisNetwork',
  props: {
    nodes: {
      type: Array,
      default: () => [
 { id: 1, label: "血栓", path: "路径1", group: 0, opacity: 1 },
  { id: 2, label: "D-二聚体", path: "路径1", group: 1, opacity: 1 },
  { id: 3, label: "改良Wells评分", path: "路径1", group: 1, opacity: 1 },
  { id: 4, label: "血管超声", path: "路径1", group: 1, opacity: 1 },
  { id: 5, label: "去除诱发血栓因素", path: "路径2", group: 5, opacity: 1 },
  { id: 6, label: "肥胖", path: "路径2", group: 2, opacity: 1 },
  { id: 7, label: "昏迷", path: "路径2", group: 0, opacity: 1 },
  { id: 8, label: "长时间机械通气", path: "路径2", group: 2, opacity: 0.2 },
  { id: 9, label: "预防性抗凝药物", path: "路径2", group: 5, opacity: 0.2 },
  { id: 10, label: "普通肝素", path: "路径2", group: 3, opacity: 1 },
  { id: 11, label: "利伐沙班", path: "路径2", group: 3, opacity: 1 },
  { id: 12, label: "低分子肝素", path: "路径2", group: 3, opacity: 1},
  { id: 13, label: "脑栓塞", path: "路径1", group: 0, opacity: 1 },
  { id: 14, label: "房颤", path: "路径1", group: 0, opacity: 1 },
  { id: 15, label: "心电图（房颤）", path: "路径1", group: 1, opacity: 1 },
  { id: 16, label: "下腔静脉滤器", path: "路径1", group: 5, opacity: 1 },
  { id: 19, label: "局部溶栓治疗", path: "路径1", group: 5, opacity: 1 },
  { id: 20, label: "梯度加压袜", path: "路径2", group: 5, opacity: 1 },
  { id: 21, label: "弹力加压袜", path: "路径2", group: 5, opacity: 1 },
  { id: 22, label: "间隙性充压装置", path: "路径2", group: 5, opacity: 1 },
  { id: 23, label: "华法林", path: "路径2", group: 3, opacity: 1 },
  { id: 24, label: "发热", path: "路径3", group: 0, opacity: 0.2 },
  { id: 25, label: "白细胞", path: "路径3", group: 1, opacity: 0.2 },
  { id: 26, label: "胸部x线", path: "路径3", group: 1, opacity: 0.2 },
  { id: 27, label: "肺部感染", path: "路径3", group: 0, opacity: 0.2 },
  { id: 28, label: "物理降温", path: "路径3", group: 5, opacity: 0.2 },
  { id: 29, label: "药物降温", path: "路径3", group: 5, opacity: 0.2 },
  { id: 30, label: "吞咽障碍", path: "路径2", group: 2, opacity: 0.2 },
  { id: 32, label: "意识障碍", path: "路径2", group: 2, opacity: 0.2 },
  { id: 33, label: "年龄大于70岁", path: "路径2", group: 2, opacity: 0.2 },
  { id: 34, label: "呼吸道管理", path: "路径3", group: 5, opacity: 0.2 },
  { id: 35, label: "呼吸功能训练", path: "路径3", group: 5, opacity: 0.2 },
  { id: 36, label: "抗生素药物", path: "路径3", group: 5, opacity: 0.2 },
  { id: 37, label: "青霉素抗生素", path: "路径2", group: 3, opacity: 0.2 },
  { id: 38, label: "四环素抗生素", path: "路径2", group: 3, opacity: 0.2 },
  { id: 39, label: "呼吸喹诺酮类抗生素", path: "路径2", group: 3, opacity: 0.2 },
  { id: 40, label: "大环内酯类抗生素", path: "路径2", group: 3, opacity: 0.2 },
  { id: 41, label: "尿路感染", path: "路径2", group: 0, opacity: 0.2 },
  { id: 42, label: "清洁间歇导尿", path: "路径2", group: 5, opacity: 0.2 },
  { id: 43, label: "膀胱功能训练", path: "路径3", group: 5, opacity: 0.2 },
  { id: 44, label: "感染", path: "路径3", group: 0, opacity: 0.2 },
  { id: 45, label: "心肌损害", path: "路径3", group: 0, opacity: 0.2 },
  { id: 46, label: "更换尿管、清洁尿道口", path: "路径2", group: 5, opacity: 0.2 },
  { id: 47, label: "定期监测膀胱功能", path: "路径2", group: 5, opacity: 0.2 },
  { id: 48, label: "物理因子治疗", path: "路径2", group: 5, opacity: 0.2 },
  { id: 49, label: "体位变换训练", path: "路径2", group: 5, opacity: 0.2 },
  { id: 50, label: "尿液培养", path: "路径2", group: 1, opacity: 0.2 },
  { id: 51, label: "脑出血", path: "路径2", group: 0, opacity: 0.2 },
  { id: 52, label: "脑栓塞", path: "路径3", group: 0, opacity: 0.2 },
  { id: 53, label: "脑梗死", path: "路径3", group: 0, opacity: 0.2 },
  { id: 54, label: "应激性溃疡", path: "路径3", group: 0, opacity: 0.2 },
  { id: 55, label: "粪便检查", path: "路径2", group: 1, opacity: 0.2 },
  { id: 56, label: "血红蛋白", path: "路径2", group: 1, opacity: 0.2 },
  { id: 57, label: "胃镜检查", path: "路径2", group: 1, opacity: 0.2 },
  { id: 58, label: "质子泵抑制剂", path: "路径2", group: 3, opacity: 0.2 },
  { id: 59, label: "H2受体拮抗剂", path: "路径2", group: 3, opacity: 0.2 },
  { id: 60, label: "胃黏膜保护剂", path: "路径2", group: 3, opacity: 0.2 },
  { id: 61, label: "抗酸药", path: "路径3", group: 3, opacity: 0.2 },
  { id: 62, label: "心肌酶学", path: "路径3", group: 0, opacity: 0.2 },
  { id: 63, label: "肌酸磷酸激酶同工酶", path: "路径3", group: 1, opacity: 0.2 },
  { id: 64, label: "肌钙蛋白-T", path: "路径2", group: 1, opacity: 0.2 },
  { id: 65, label: "心肌损伤", path: "路径2", group: 0, opacity: 0.2 },
  { id: 66, label: "溶栓治疗", path: "路径2", group: 5, opacity: 0.2 },
  { id: 67, label: "抗炎治疗", path: "路径2", group: 5, opacity: 0.2 },
  { id: 68, label: "心脏瓣膜手术", path: "路径2", group: 5, opacity: 0.2 },
  { id: 69, label: "营养心肌", path: "路径2", group: 5, opacity: 0.2 },
  { id: 70, label: "改善心肌代谢", path: "路径3", group: 5, opacity: 0.2 },
  { id: 71, label: "电解质", path: "路径3", group: 0, opacity: 0.2 },
  { id: 72, label: "钾", path: "路径3", group: 0, opacity: 0.2 },
  { id: 73, label: "钠", path: "路径2", group: 0, opacity: 0.2 },
  { id: 74, label: "氯", path: "路径2", group: 0, opacity: 0.2 },
  { id: 75, label: "镁", path: "路径2", group: 0, opacity: 0.2 },
  { id: 76, label: "钙", path: "路径2", group: 0, opacity: 0.2 },
  { id: 77, label: "高钾血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 78, label: "低钾血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 79, label: "利尿剂", path: "路径3", group: 3, opacity: 0.2 },
  { id: 80, label: "碳酸氢钠", path: "路径3", group: 3, opacity: 0.2 },
  { id: 81, label: "静推葡萄糖加胰岛素", path: "路径3", group: 5, opacity: 0.2 },
  { id: 82, label: "舒喘灵喷雾剂", path: "路径2", group: 3, opacity: 0.2 },
  { id: 83, label: "静脉补钾", path: "路径2", group: 5, opacity: 0.2 },
  { id: 84, label: "高钠血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 85, label: "低钠血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 86, label: "注射氯化钠溶液", path: "路径3", group: 5, opacity: 0.2 },
  { id: 87, label: "注射右旋糖酐溶液加氯化钠溶液", path: "路径2", group: 5, opacity: 0.2 },
  { id: 88, label: "高钙血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 89, label: "低钙血症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 90, label: "静推氯化钙溶液", path: "路径2", group: 5, opacity: 0.2 },
  { id: 91, label: "静脉滴注成分钙", path: "路径3", group: 5, opacity: 0.2 },
  { id: 92, label: "肝肾功能", path: "路径2", group: 0, opacity: 0.2 },
  { id: 93, label: "总胆红", path: "路径2", group: 1, opacity: 0.2 },
  { id: 94, label: "白蛋白", path: "路径2", group: 1, opacity: 0.2 },
  { id: 95, label: "肌酐", path: "路径2", group: 1, opacity: 0.2 },
  { id: 96, label: "尿素氮", path: "路径3", group: 1, opacity: 0.2 },
  { id: 97, label: "谷丙转氨酶", path: "路径2", group: 1, opacity: 0.2 },
  { id: 98, label: "肝功能异常", path: "路径2", group: 0, opacity: 0.2 },
  { id: 99, label: "肾功能不全", path: "路径2", group: 0, opacity: 0.2 },
  { id: 100, label: "炎性指标", path: "路径2", group: 0, opacity: 0.2 },
  { id: 101, label: "白细胞介素-2", path: "路径3", group: 1, opacity: 0.2 },
  { id: 102, label: "C反应蛋白", path: "路径2", group: 1, opacity: 0.2 },
  { id: 103, label: "无菌性炎症", path: "路径2", group: 0, opacity: 0.2 },
  { id: 106, label: "降低颅内压", path: "路径2", group: 5, opacity: 0.2 },
  { id: 107, label: "脑水肿", path: "路径3", group: 0, opacity: 0.2 },
  { id: 108, label: "甘露醇", path: "路径2", group: 3, opacity: 0.2 },
  { id: 109, label: "甲磺酸去铁胺", path: "路径2", group: 3, opacity: 0.2 },
  { id: 110, label: "血脂", path: "路径2", group: 0, opacity: 0.2 },
  { id: 111, label: "甘油三酯", path: "路径2", group: 1, opacity: 0.2 },
  { id: 112, label: "脂蛋白", path: "路径2", group: 1, opacity: 0.2 },
  { id: 113, label: "他汀类药物", path: "路径3", group: 3, opacity: 0.2 },
  { id: 114, label: "非他汀类药物", path: "路径2", group: 3, opacity: 0.2 },
  { id: 115, label: "神经功能恶化", path: "路径2", group: 0, opacity: 0.2 },
  { id: 117, label: "镇静", path: "路径2", group: 0, opacity: 0.2 },
  { id: 118, label: "修订昏迷恢复量表", path: "路径2", group: 1, opacity: 0.2 },
  { id: 119, label: "Richmond躁动-镇静量表", path: "路径3", group: 1, opacity: 0.2 },
  { id: 120, label: "头部CT", path: "路径2", group: 1, opacity: 0.2 },
  { id: 121, label: "运动功能障碍", path: "路径2", group: 0, opacity: 0.2 },
  { id: 122, label: "充血性心力衰竭", path: "路径2", group: 0, opacity: 0.2 },
  { id: 124, label: "进展性脑卒中", path: "路径2", group: 0, opacity: 0.2 },
  { id: 125, label: "出血转化", path: "路径3", group: 0, opacity: 0.2 },
  { id: 126, label: "促醒药物", path: "路径2", group: 3, opacity: 0.2 },
  { id: 127, label: "中医促醒", path: "路径2", group: 5, opacity: 0.2 },
  { id: 128, label: "镇静药物", path: "路径2", group: 3, opacity: 0.2 },
  { id: 129, label: "高压氧治疗", path: "路径2", group: 5, opacity: 0.2 },
  { id: 130, label: "血糖", path: "路径2", group: 0, opacity: 0.2 },
  { id: 131, label: "高血糖", path: "路径3", group: 0, opacity: 0.2 },
  { id: 132, label: "低血糖", path: "路径2", group: 0, opacity: 0.2 },
  { id: 133, label: "死亡", path: "路径2", group: 0, opacity: 0.2 },
  { id: 134, label: "转归不良", path: "路径2", group: 0, opacity: 0.2 },
  { id: 135, label: "缺血性脑损伤", path: "路径2", group: 0, opacity: 0.2 },
  { id: 136, label: "胰岛素", path: "路径2", group: 3, opacity: 0.2 },
  { id: 137, label: "注射葡萄糖溶液", path: "路径3", group: 5, opacity: 0.2 },
  { id: 138, label: "高血压", path: "路径2", group: 0, opacity: 0.2 },
  { id: 139, label: "出血风险", path: "路径2", group: 0, opacity: 0.2 },
  { id: 140, label: "强化降压联合溶栓治疗", path: "路径2", group: 5, opacity: 0.2 },
  { id: 141, label: "静脉抗高血压药物", path: "路径2", group: 5, opacity: 0.2 }

      ]
    },
    edges: {
      type: Array,
      default: () => [
     { from: 9, to: 23, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 9, to: 11, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 9, to: 12, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 9, to: 10, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 13, to: 14, label: "伴随并发", arrows: "to", color: "rgba(255, 165, 0, 1)" },
  { from: 14, to: 15, label: "进行检查", arrows: "to", color: "rgba(255, 165, 0, 1)" },
  { from: 15, to: 1, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,  1)" },
  { from: 15, to: 9, label: "预防", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 1, to: 2, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0, 1)" },
  { from: 1, to: 3, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0, 1)" },
  { from: 2, to: 4, label: "增加检查", arrows: "to", color: "rgba(255, 255, 0, 1)" },
  { from: 3, to: 4, label: "增加检查", arrows: "to", color: "rgba(255, 255, 0, 1)" },
  { from: 4, to: 22, label: "阴性应对措施", arrows: "to", color: "rgba(0, 255, 0, 1)" },
  { from: 4, to: 21, label: "阴性应对措施", arrows: "to", color: "rgba(0, 255, 0, 1)" },
  { from: 4, to: 20, label: "阴性应对措施", arrows: "to", color: "rgba(0, 255, 0, 1)" },
  { from: 4, to: 19, label: "阳性应对措施", arrows: "to", color: "rgba(0, 255, 0, 1)" },
  { from: 4, to: 16, label: "阳性应对措施", arrows: "to", color: "rgba(0, 255, 0, 1)" },
  { from: 2, to: 5, label: "无风险", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 3, to: 5, label: "无风险", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 5, to: 20, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 5, to: 22, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 5, to: 21, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 6, to: 1, label: "增加风险", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 7, to: 1, label: "增加风险", arrows: "to", color: "rgba(0, 255, 255, 1)" },
  { from: 8, to: 1, label: "增加风险", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 6, to: 9, label: "预防", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 7, to: 9, label: "预防", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 8, to: 9, label: "预防", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 24, to: 25, label: "进行检查", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 25, to: 27, label: "伴随并发", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 8, to: 27, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 30, to: 27, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 32, to: 27, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 33, to: 27, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 27, to: 36, label: "治疗药物", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 36, to: 37, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 36, to: 38, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 36, to: 39, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 36, to: 40, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 27, to: 34, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 27, to: 35, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 25, to: 26, label: "增加检查", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 25, to: 28, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 25, to: 29, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 26, to: 27, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 41, to: 36, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 41, to: 46, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 41, to: 47, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 41, to: 48, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 41, to: 49, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 42, to: 41, label: "预防", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 43, to: 41, label: "预防", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 44, to: 50, label: "增加检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 51, to: 54, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 52, to: 54, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 53, to: 54, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 54, to: 55, label: "进行检查", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 54, to: 56, label: "进行检查", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 55, to: 57, label: "增加检查", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 56, to: 57, label: "增加检查", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 57, to: 58, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 57, to: 59, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 57, to: 60, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 57, to: 61, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 62, to: 63, label: "进行检查", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 62, to: 64, label: "进行检查", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 63, to: 45, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 64, to: 65, label: "增加风险", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 65, to: 66, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 65, to: 67, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 65, to: 68, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 45, to: 69, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 45, to: 70, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 71, to: 72, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 71, to: 73, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 71, to: 74, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 71, to: 75, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 71, to: 76, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 72, to: 77, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 72, to: 78, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 77, to: 79, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 77, to: 80, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 77, to: 81, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 77, to: 82, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 78, to: 83, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 73, to: 84, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 73, to: 85, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 84, to: 86, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 84, to: 87, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 85, to: 86, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 76, to: 88, label: "增加检查", arrows: "to", color: "rgba(75, 0, 130,    0.1)" },
  { from: 76, to: 89, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 88, to: 86, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 89, to: 90, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 89, to: 91, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 92, to: 93, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 92, to: 94, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 92, to: 95, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 92, to: 96, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 92, to: 97, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 93, to: 98, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 94, to: 98, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 95, to: 99, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 96, to: 99, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 97, to: 98, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 100, to: 101, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 100, to: 102, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 101, to: 44, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 102, to: 44, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 102, to: 103, label: "应对措施", arrows: "to", color: "rgba(0, 255, 0,    0.1)" },
  { from: 44, to: 24, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 104, to: 107, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 138, to: 107, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 106, to: 107, label: "预防", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 107, to: 108, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 107, to: 109, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 110, to: 111, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 110, to: 112, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 111, to: 53, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 112, to: 51, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 112, to: 53, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 111, to: 51, label: "增加风险", arrows: "to", color: "rgba(0, 0, 255,    0.1)" },
  { from: 111, to: 113, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 112, to: 113, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 111, to: 114, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 112, to: 114, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 111, to: 115, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 7, to: 118, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 117, to: 119, label: "进行检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 118, to: 120, label: "增加检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 119, to: 120, label: "增加检查", arrows: "to", color: "rgba(255, 255, 0,    0.1)" },
  { from: 120, to: 124, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 120, to: 125, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 120, to: 107, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 121, to: 7, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 122, to: 7, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 6, to: 7, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 1, to: 7, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 121, to: 117, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 122, to: 117, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 6, to: 117, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 1, to: 117, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 118, to: 126, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 118, to: 127, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 118, to: 48, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 118, to: 129, label: "应对措施", arrows: "to", color: "rgba(0, 255, 255,    0.1)" },
  { from: 119, to: 128, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 130, to: 131, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 130, to: 132, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 131, to: 133, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 131, to: 134, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 132, to: 135, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 132, to: 107, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 131, to: 136, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 132, to: 137, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 138, to: 139, label: "增加风险", arrows: "to", color: "rgba(255, 165, 0,    0.1)" },
  { from: 138, to: 140, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" },
  { from: 138, to: 141, label: "使用药物", arrows: "to", color: "rgba(255, 0, 0,    0.1)" }

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
        },
        /*physics: {
      stabilization: true,
      wind: { x: 0, y: 0 },
    },
    
    */
    physics: {
          enabled: false  
        }   
        
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
    initializeNetwork() {
      const container = this.$refs.networkContainer;
      const data = {
        nodes: this.nodes,
        edges: this.edges
      };
      
      this.network = new Network(container, data, this.options);
    }
  }
};
</script>

<style scoped>
.network-container {
  width: 100%;
  height: 380px;
  /*border: 1px solid #eee;*/
  border-radius: 4px;
  /*background-color: gray;*/
}
</style>