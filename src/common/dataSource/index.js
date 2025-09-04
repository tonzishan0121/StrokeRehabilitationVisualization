import seedrandom from 'seedrandom';
const today_9_zhibiao = (id) =>{
    return {
    "HR": generate_random_number(id,1,60,100)[0],
    "SBP": generate_random_number(id,1,140,180)[0],
    "ICP": generate_random_number(id,1,5,15)[0],
    "MAP": generate_random_number(id,1,90,110)[0],
    "T": generate_random_number(id,1,35.5,37.3)[0],
    "RR": generate_random_number(id,1,12,24)[0],
    "SpO2": generate_random_number(id,1,94,100)[0],
    "PEEP": generate_random_number(id,1,5,12)[0],
    "FiO2": generate_random_number(id,1,21,40)[0],
    }
}

const generate_random_number=(id, count, min, max)=>{
    const rng = new seedrandom(id);
    return Array.from({length:count},()=>
        Math.floor(rng()*(max-min+1))+min
    )
}

const today_8_liangbiao = (id) => {
    const data = generate_random_number(id, 8, 10, 80);
    return {
    "S5Q": data[0],
    "RASS": data[1],
    "MMASA ": data[2],
    "MRCsum ": data[3],
    "BBS sit-to-stand": data[4],
    "BBS standing": data[5],
    "BBS sitting": data[6],
    "FOIS": data[7],
    }
}

const hours_3_zhibiao = (id) => {
    return {
        "heartRate": generate_random_number(id, 24, 140, 180),
        "systolicPressure": generate_random_number(id, 24, 70, 100),
        "diastolicPressure": generate_random_number(id, 24, 60, 100)
    }
}

const week_8_zhibiao = (id) => { 
    const data = generate_random_number(id, 56, 5, 60);
    return {
    "SQ5": data.splice(0, 7),
    "MRC": data.splice(0, 7),
    "FOIS": data.splice(0, 7),
    "RASS": data.splice(0, 7),
    "MMASA": data.splice(0, 7),
    "BBS1": data.splice(0, 7),
    "BBS2": data.splice(0, 7),
    "BBS3": data.splice(0, 7),
}
}
const paibanbiao = () => {
    return [
    {
        "therapistName": "张伟",
        "department": "理疗科"
    },
    {
        "therapistName": "李明",
        "department": "康复科"
    },
    {
        "therapistName": "王芳",
        "department": "作业科"
    },
    {
        "therapistName": "刘洋",
        "department": "言语科"
    },
    {
        "therapistName": "赵丽",
        "department": "神经科"
    },
    {
        "therapistName": "陈静",
        "department": "心理科"
    },
    {
        "therapistName": "李强",
        "department": "针灸科"
    },
    {
        "therapistName": "张华",
        "department": "推拿科"
    },
    {
        "therapistName": "王丽",
        "department": "理疗科"
    },
    {
        "therapistName": "刘敏",
        "department": "康复科"
    },
    {
        "therapistName": "赵刚",
        "department": "作业科"
    },
    {
        "therapistName": "陈伟",
        "department": "言语科"
    },
    {
        "therapistName": "张伟",
        "department": "神经科"
    },
    {
        "therapistName": "李明",
        "department": "心理科"
    },
    {
        "therapistName": "王芳",
        "department": "针灸科"
    },
    {
        "therapistName": "刘洋",
        "department": "推拿科"
    },
    {
        "therapistName": "赵丽",
        "department": "理疗科"
    },
    {
        "therapistName": "陈静",
        "department": "康复科"
    },
    {
        "therapistName": "李强",
        "department": "作业科"
    },
    {
        "therapistName": "张华",
        "department": "言语科"
    },
    {
        "therapistName": "王丽",
        "department": "神经科"
    },
    {
        "therapistName": "刘敏",
        "department": "心理科"
    },
    {
        "therapistName": "赵刚",
        "department": "针灸科"
    },
    {
        "therapistName": "陈伟",
        "department": "推拿科"
    }
    ]
}

const graph_3_node = (id) => { 
    const wulipinggu = ["FMA", "MAS", "TUG", "6MWT", "HIS", "ROM", "GCS", "NRS", "VAS", "BMI", "ASIA", "MMT", "Tinetti", "UPDRS", "NIHSS"];
    const zuoyepinggu = ["ADL", "MBI", "VAST", "LOTCA", "MoCA", "MMSE", "PPT", "SST", "TMT", "WCST", "ABILHAND", "ARAT", "BRI", "BRII", "CLOX"];
    const tunyanpinggu = ["VFSS", "FEES", "WST", "MBS", "PAS", "DOS", "EAT-10", "MDTP", "PST", "RSST", "IDDSI", "OMSA", "SWAL-QOL", "WRS", "YALE"];
    const wulizhiliao = ["平衡训练", "肌力训练", "关节松动术", "步态训练", "电刺激治疗", "热疗", "冷疗", "牵引治疗", "运动控制训练", "本体感觉训练", "呼吸训练", "水中康复", "虚拟现实训练", "机器人辅助训练", "功能性电刺激"];
    const zuoyezhiliao = ["手功能训练", "认知训练", "日常生活活动训练", "职业康复训练", "环境改造指导", "感觉统合训练", "心理康复训练", "社交技能训练", "辅助器具使用训练", "康复教育", "手工活动训练", "烹饪训练", "购物训练", "家务训练", "社区康复训练"];
    const item_count = generate_random_number(id, 15, 1, 8);
    return {
        "part1": {
            "康复评估": {
                "物理评估": [...new Set(generate_random_number(1, item_count[0], 0, 14))].map(i => wulipinggu[i]),
                "作业评估": [...new Set(generate_random_number(2, item_count[1], 0, 14))].map(i => zuoyepinggu[i]),
                "吞咽评估": [...new Set(generate_random_number(3, item_count[2], 0, 14))].map(i => tunyanpinggu[i])
            },
            "康复训练": {
                "物理治疗": [...new Set(generate_random_number(4, item_count[3], 0, 14))].map(i => wulizhiliao[i]),
                "作业治疗": [...new Set(generate_random_number(5, item_count[4], 0, 14))].map(i => zuoyezhiliao[i]),
            }
        },
        "part2": {
            "康复评估": {
                "物理评估": [...new Set(generate_random_number(6, item_count[5], 0, 14))].map(i => wulipinggu[i]),
                "作业评估": [...new Set(generate_random_number(7, item_count[6], 0, 14))].map(i => zuoyepinggu[i]),
                "吞咽评估": [...new Set(generate_random_number(8, item_count[7], 0, 14))].map(i => tunyanpinggu[i])
            },
            "康复训练": {
                "物理治疗": [...new Set(generate_random_number(9, item_count[8], 0, 14))].map(i => wulizhiliao[i]),
                "作业治疗": [...new Set(generate_random_number(10, item_count[9], 0, 14))].map(i => zuoyezhiliao[i]),
            }
        },
        "part3": {
            "康复评估": {
                "物理评估": [...new Set(generate_random_number(11, item_count[10], 0, 14))].map(i => wulipinggu[i]),
                "作业评估": [...new Set(generate_random_number(12, item_count[11], 0, 14))].map(i => zuoyepinggu[i]),
                "吞咽评估": [...new Set(generate_random_number(13, item_count[12], 0, 14))].map(i => tunyanpinggu[i])
            },
            "康复训练": {
                "物理治疗": [...new Set(generate_random_number(14, item_count[13], 0, 14))].map(i => wulizhiliao[i]),
                "作业治疗": [...new Set(generate_random_number(15, item_count[14], 0, 14))].map(i => zuoyezhiliao[i]),
            }
        }
    }
}

const graph_3_fangan = (id) => { 
    const tips = [
        "仔细检查病人是否有严重的感染性疾病、近期心肌梗死、未控制的癫痫发作、大面积脑卒中急性期等康复训练禁忌症",
        "密切监测患者的生命体征，包括血压、心率、呼吸频率和血氧饱和度，确保其稳定",
        "定期检查患者的皮肤，预防压疮的发生；进行深静脉血栓预防措施，如使用弹力袜或间歇性气压治疗",
        "根据患者的具体病情和功能障碍，制定个性化的康复计划，确保康复训练的安全性和有效性",
        "关注患者的心理状态，提供必要的心理支持和疏导，帮助患者保持积极的心态",
        "确保患者摄入足够的营养，特别是蛋白质和维生素，以支持身体的恢复和康复",
        "对于有呼吸功能障碍的患者，进行呼吸功能训练，如深呼吸、咳嗽训练等",
        "在患者病情允许的情况下，尽早开始床上活动，如被动关节活动、翻身训练等，以防止肌肉萎缩和关节僵硬",
        "康复训练应循序渐进，避免过度疲劳，根据患者的耐受性调整训练强度",
        "鼓励家属参与康复过程，提供必要的指导和支持，帮助患者在家庭环境中继续康复训练",
        "定期对患者的康复进展进行评估，根据评估结果及时调整康复计划",
        "在患者开始行走训练时，确保环境安全，使用辅助设备（如助行器），并有专人监护，防止跌倒",
        "对于有语言障碍的患者，尽早开始语言康复训练，包括发音练习、语言理解训练等",
        "对于有吞咽困难的患者，进行吞咽功能评估和训练，确保安全进食",
        "在康复训练中，注意保持患者的正确姿势，避免不良姿势导致的二次损伤",
        "康复过程中应多学科协作，包括神经内科、康复医学科、营养科、心理科等，共同为患者提供全面的康复支持"
    ]
    const wulikangfu = [
        "关节活动度训练（上肢、下肢各关节的屈伸、旋转，每个动作保持15-30秒，重复10-15次，一日3次）",
        "肌力增强训练（使用弹力带或小哑铃进行抗阻训练，每组10-15次，共3-4组，每周3-4次）",
        "平衡训练（单脚站立，双手侧平举，保持15-30秒，每侧重复10-15次，一日3次）",
        "步态训练（在平行杠内进行步行练习，注意步态的对称性和稳定性，每次15-20分钟，一日2次）",
        "本体感觉训练（使用平衡板进行站立训练，保持身体平衡，每次10-15分钟，一日2次）",
        "呼吸训练（进行深呼吸和咳嗽练习，每次5-10分钟，一日3-4次）",
        "耐力训练（进行缓慢的步行或骑自行车练习，每次20-30分钟，每周3-4次）",
        "柔韧性训练（进行全身拉伸，每个动作保持20-30秒，重复2-3次，一日1次）",
        "协调性训练（进行手部精细动作练习，如捏橡皮泥、系扣子等，每次10-15分钟，一日2次）",
        "电刺激治疗（使用电刺激仪对肌肉进行刺激，每次20-30分钟，每周3-4次）",
        "热疗（使用热敷袋对关节或肌肉进行热敷，每次15-20分钟，一日2次）",
        "冷疗（在运动后使用冰袋冷敷关节或肌肉，每次15-20分钟，一日1次）",
        "牵引治疗（进行颈椎或腰椎牵引，每次15-20分钟，每周2-3次）",
        "运动控制训练（进行核心肌群训练，如平板支撑，每次保持30-60秒，重复3-4次，一日2次）",
        "功能性训练（进行上下楼梯、提重物等日常活动训练，每次10-15分钟，一日2次）",
        "水中康复训练（在水中进行步行或游泳练习，每次20-30分钟，每周2-3次）",
        "虚拟现实训练（使用虚拟现实设备进行康复训练，每次20-30分钟，每周2-3次）"
    ]
    const zuolikangfu = [
        "手部精细动作训练（如捏小球、使用剪刀剪纸、系扣子等，每次15-20分钟，一日2次）",
        "日常生活活动训练（如穿衣、洗漱、进食等，每次30-45分钟，一日1次）",
        "认知功能训练（如记忆游戏、拼图、简单的数学计算等，每次20-30分钟，一日2次）",
        "职业康复训练（如模拟工作场景进行相关技能训练，每次30-45分钟，每周2-3次）",
        "社交技能训练（如角色扮演、小组交流等，每次30-45分钟，每周2-3次）",
        "感觉统合训练（如在不同质地的表面上行走、触摸不同材质的物品等，每次20-30分钟，一日2次）",
        "心理康复训练（如放松训练、情绪调节技巧等，每次20-30分钟，一日1次）",
        "辅助器具使用训练（如使用轮椅、拐杖等辅助器具，每次30-45分钟，一日1次）",
        "康复教育（如向患者和家属讲解康复知识和家庭康复方法，每次30-45分钟，每周1-2次）",
        "手工活动训练（如编织、绘画、陶艺等，每次30-45分钟，每周2-3次）",
        "烹饪训练（如简单的烹饪活动，每次30-45分钟，每周1-2次）",
        "购物训练（如模拟购物场景，练习使用货币和计算价格等，每次30-45分钟，每周1-2次）",
        "家务训练（如打扫房间、洗衣服等，每次30-45分钟，每周2-3次）",
        "社区康复训练（如在社区环境中进行购物、乘坐公共交通等，每次30-45分钟，每周1-2次）",
        "环境改造指导（如对家庭环境进行无障碍改造，每次30-45分钟，每周1-2次）",
        "心理支持小组（如参加心理支持小组，分享康复经验和感受，每次30-45分钟，每周1次）",
        "虚拟现实训练（使用虚拟现实设备进行社交和生活技能训练，每次20-30分钟，每周2-3次）"
    ]
    const tunyankangfu = [
        "吞咽功能评估（使用洼田饮水试验、吞咽造影等方法，每周1-2次）",
        "口腔感觉训练（如使用冰棉签刺激口腔内壁，每次10-15分钟，一日2次）",
        "舌部运动训练（如伸舌、卷舌、左右摆动舌，每个动作保持10-15秒，重复10-15次，一日3次）",
        "咀嚼训练（使用软食或口香糖进行咀嚼练习，每次10-15分钟，一日2次）",
        "咽喉部冷刺激（使用冰棉签刺激咽喉部，每次10-15分钟，一日2次）",
        "吞咽动作训练（如空吞咽练习，每次10-15次，一日3次）",
        "食物吞咽训练（从糊状食物开始，逐渐过渡到固体食物，每次15-20分钟，一日2次）",
        "吞咽电刺激治疗（使用吞咽电刺激仪，每次20-30分钟，每周3-4次）",
        "吞咽生物反馈训练（使用生物反馈设备，每次20-30分钟，每周2-3次）",
        "吞咽姿势调整（如低头吞咽、侧头吞咽等，每次10-15分钟，一日2次）",
        "吞咽呼吸协调训练（在吞咽时进行呼吸控制，每次10-15分钟，一日2次）",
        "吞咽放松训练（进行颈部和咽喉部的放松练习，每次10-15分钟，一日2次）",
        "吞咽心理支持（通过心理疏导，减轻吞咽焦虑，每次20-30分钟，每周1-2次）",
        "吞咽康复教育（向患者和家属讲解吞咽康复知识，每次30-45分钟，每周1次）",
        "吞咽功能监测（定期监测吞咽功能的改善情况，每周1次）",
        "吞咽饮食调整（根据吞咽能力调整食物的质地和稠度，每日3次）",
        "吞咽康复小组（参加吞咽康复小组，分享经验，每次30-45分钟，每周1次）",
        "吞咽康复游戏（如吞咽相关的趣味游戏，每次20-30分钟，每周2-3次）"
    ]
    const part = (num) => {
        return {
            "title": "康复方案",
            "tips": tips[generate_random_number(id+num+1, 1, 0, 15)],
            "sections": [
                {
                    "title": "物理康复：",
                    "items": [...new Set(generate_random_number(id+num+2, 3, 0, 15))].map(i => wulikangfu[i])
                },
                {
                    "title": "作业康复：",
                    "items": [...new Set(generate_random_number(id+num+3, 3, 0, 15))].map(i => zuolikangfu[i])
                },
                {
                    "title": "吞咽康复：",
                    "items": [...new Set(generate_random_number(id+num+4, 3, 0, 15))].map(i => tunyankangfu[i])
                }
            ]
        }}
    return [
        part(0),
        part(1),
        part(2)
    ]
} 

const patient_info = async(id) => { 
  const res = await fetch('http://221.6.205.110:7500/prod-api/api/patient',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer sk_4e8fdefc1a87b8d7a0b3e6f5"
    },
    body: JSON.stringify({
      id: id,
    })
  }).then(res => res.json())

  if (res.code == 200) {
    return res.data;
  }else {
    console.error(res.msg)
  }
}

const event_graph = (id)=>{
  const tips1 = ["脑干出血","大面积脑梗死","脑疝形成","脑水肿","颅内压升高","癫痫持续状态","意识障碍","吞咽困难","肢体偏瘫","言语障碍","认知功能障碍","情绪障碍","压疮","下肢深静脉血栓","肺栓塞","坠积性肺炎","泌尿系统感染","消化道出血","电解质紊乱","多器官功能衰竭"]
  const tips2 = ["低分子肝素钙注射液 4100IU 皮下注射 q12h","华法林钠片 3mg 口服 qd","利伐沙班片 10mg 口服 qd","肢体气压治疗 bid","床上踝泵运动 30次/组 tid","凝血功能检测 q3d","下肢静脉超声复查 qw","穿戴梯度压力袜","抬高下肢20-30°","避免下肢静脉穿刺","每日饮水>2000ml","早期床边坐起","神经肌肉电刺激","D-二聚体动态监测","抗凝药物剂量调整","预防性抗凝疗程14天","观察出血倾向","避免同时使用NSAIDs","定期评估血栓风险","康复科会诊制定运动处方"]
  const tips3 = ["肠内营养液 500ml 鼻胃管注入 qd","肠外营养液 1440ml 中心静脉输注 qd","蛋白质粉 20g 口服 bid","复合维生素片 1片 口服 qd","血清白蛋白检测 biw","上臂围测量 qw","24小时出入量记录","营养师会诊调整热量","少量多餐 6次/日","避免高糖高脂饮食","定期监测前白蛋白","补充ω-3脂肪酸","经皮胃造瘘术评估","吞咽功能训练","床头抬高30°防反流","营养支持疗程2周","观察胃肠道耐受性","每日热量目标25kcal/kg","蛋白质目标1.5g/kg","康复期营养教育"]
  const tips4 = ["胰岛素注射液 6IU 皮下注射 tid","二甲双胍片 500mg 口服 bid","血糖监测 qid（三餐前+睡前）","糖尿病饮食 控制总热量","无糖饮食 避免甜食","碳水化合物计数法","血糖仪居家监测","内分泌科会诊调整方案","糖化血红蛋白检测 q3m","警惕低血糖症状","运动前后血糖监测","胰岛素剂量个体化","口服降糖药时程","饮食日记记录","血糖波动原因分析","动态血糖监测评估","避免空腹运动","睡前加餐防夜间低血糖","定期评估胰岛功能","糖尿病足筛查"]
  const num = generate_random_number(id, 6, 0, 19)
  return {
    "physiological": [
        {
            "title": tips1[num[0]]
        },
        {
            "title": tips1[num[1]]
        },
        {
            "title": tips1[num[2]]
        },
        {
            "title": tips1[num[3]]
        },
        {
            "title": tips1[num[4]]
        },
        {
            "title": tips1[num[5]]
        }
    ],
    "riskIndicators": {
        "dDimer": generate_random_number(id, 1, 3, 12)[0]/10,
        "dDimerSuggestions": generate_random_number(id+1, 3, 0, 19).map(i => tips2[i]),
        "nutritionScore": generate_random_number(id, 1, 0, 6)[0],
        "nutritionSuggestions": generate_random_number(id+2, 3, 0, 19).map(i => tips3[i]),
        "bloodSugar": generate_random_number(id, 1, 50, 120)[0]/10,
        "bloodSugarSuggestions": generate_random_number(id+3, 3, 0, 19).map(i => tips4[i]),
    }
}
}
export {
    today_9_zhibiao,
    today_8_liangbiao,
    hours_3_zhibiao,
    paibanbiao,
    graph_3_fangan,
    graph_3_node,
    patient_info,
    week_8_zhibiao,
    event_graph
}