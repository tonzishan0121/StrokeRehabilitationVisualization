import seedrandom from 'seedrandom';
const today_9_zhibiao = (id) => {
    return {
        "HR": generate_random_number(id, 1, 60, 100)[0],
        "SBP": generate_random_number(id, 1, 140, 180)[0],
        "ICP": generate_random_number(id, 1, 5, 15)[0],
        "MAP": generate_random_number(id, 1, 90, 110)[0],
        "T": generate_random_number(id, 1, 36, 37.3)[0],
        "RR": generate_random_number(id, 1, 12, 24)[0],
        "SpO2": generate_random_number(id, 1, 94, 100)[0],
        "PEEP": generate_random_number(id, 1, 5, 12)[0],
        "FiO2": generate_random_number(id, 1, 21, 40)[0],
    }
}

const generate_random_number = (id, count, min, max) => {
    const rng = new seedrandom(id);
    return Array.from({ length: count }, () =>
        Math.floor(rng() * (max - min + 1)) + min
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
        "heartRate": generate_random_number(id, 24, 100, 110),
        "systolicPressure": generate_random_number(id, 24, 90, 100),
        "diastolicPressure": generate_random_number(id, 24, 60, 90)
    }
}

const week_8_zhibiao = (id) => {
    const data = {
        "SQ5": generate_random_number(id + 1, 1, 1, 3),
        "MRC": generate_random_number(id + 2, 1, 0, 3),
        "FOIS": generate_random_number(id + 3, 1, 1, 5),
        "RASS": generate_random_number(id + 4, 1, -5, 2),
        "MMASA": generate_random_number(id + 5, 1, 0, 20),
        "BBS1": generate_random_number(id + 6, 1, 10, 30),
        "BBS2": generate_random_number(id + 7, 1, 11, 49),
        "BBS3": generate_random_number(id + 8, 1, 12, 48),
    }
    for (const k of Object.keys(data)) {
        data[k].push(data[k][0] * (Math.random() + 1))
        data[k].push(data[k][1] * (Math.random() + 1))
        if (k == "RASS") {
            data[k][1] = Math.abs(data[k][0] * Math.random()) + data[k][0]
            data[k][2] = Math.abs(data[k][1] * Math.random()) + data[k][1]
        }
    }
    return data
}
const paibanbiao = () => {
    return [
        {
            therapistName: "张伟",
            time: `周一8:00~11:00`

        },
        {
            "therapistName": "李明",
            time: `周一13:00~18:00`
        },
        {
            "therapistName": "赵丽",
            time: `周二8:00~11:00`
        },
        {
            "therapistName": "陈静",
            time: `周二13:00~18:00`
        },
        {
            "therapistName": "李强",
            time: `周三8:00~11:00`
        },
        {
            "therapistName": "张华",
            time: '周三13:00~18:00'
        },
        {
            "therapistName": "王丽",
            time: `周四8:00~11:00`
        },
        {
            "therapistName": "刘敏",
            time: `周四13:00~18:00`
        },
        {
            "therapistName": "张伟",
            time: `周五8:00~11:00`
        },
        {
            "therapistName": "李明",
            time: `周五13:00~18:00`
        },
        {
            "therapistName": "王芳",
            time: `周六8:00~11:00`
        },
        {
            "therapistName": "刘洋",
            time: `周六13:00~18:00`
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

const temp_res_data = () => {
    return {
        "title": "康复方案",
        "tips": '',
        "sections": [
            {
                "title": "物理康复：",
                "items": []
            },
            {
                "title": "作业康复：",
                "items": []
            },
            {
                "title": "吞咽康复：",
                "items": []
            }
        ]
    }
}
const graph_3_nodes_data = (id) => {
    const data_map = ['放松训练', '肌力训练', '平衡训练', '认知训练', '上下肢协调训练', '手功能训练', '体位适应性训练', '有氧训练', '有氧训练电刺激', '发声训练', '辅助技巧感觉刺激', '构音训练', '呼吸训练', '口肌训练肺功能康复训练', '关节松动训练', '呼吸训练', '肌力训练', '体位适应性训练超短波', '超声波', '低频电疗', '电子生物反馈', '偏振红外光', '中频电疗', '关节松动训练', '肌力训练', '平衡训练', '上下肢协调训练', '手功能训练', '体位适应性训练', '有氧训练', '转移训练'];
    const count = generate_random_number(id, 1, 5, 8)[0]
    return generate_random_number(id, count, 0, data_map.length).map((index) => data_map[index])
}
const graph_3_fangan = async (id) => {
    const res = await fetch('http://175.27.249.76:10750/prod-api/api/patient/export_detail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer sk_4e8fdefc1a87b8d7a0b3e6f5"
        },
        body: JSON.stringify({
            id: id,
        })
    }).then(res => res.json());
    if (res.code == 200) {
        const results = res.data.treatment_paths.map(path => {
            const result = temp_res_data();
            // 添加空值检查，避免空指针异常
            if (path.treatment_plan && path.treatment_plan.plan_content) {
                result.tips = path.treatment_plan.plan_content[0] ?
                    (path.treatment_plan.plan_content[0].value ?
                        path.treatment_plan.plan_content[0].value[0] : '') : '';
                for (let i = 0; i < 3; i++) {
                    if (path.treatment_plan.plan_content[i + 1]) {
                        result.sections[i].title = path.treatment_plan.plan_content[i + 1].label || '';
                        result.sections[i].items = path.treatment_plan.plan_content[i + 1].value || [];
                    } else {
                        result.sections[i].title = '';
                        result.sections[i].items = [];
                    }
                }
            }
            console.log(result);
            return result;
        });
        return results;
    } else {
        console.error(res.msg)
    }
}

const patient_info = async (id) => {
    return await fetch('http://175.27.249.76:10750/prod-api/api/patient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk_4e8fdefc1a87b8d7a0b3e6f5'
        },
        body: JSON.stringify({
            id
        })
    })
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => console.error('Error:', error));

}

const event_graph = (id) => {
    const tips1 = ["脑干出血", "大面积脑梗死", "脑疝形成", "脑水肿", "颅内压升高", "癫痫持续状态", "意识障碍", "吞咽困难", "肢体偏瘫", "言语障碍", "认知功能障碍", "情绪障碍", "压疮", "下肢深静脉血栓", "肺栓塞", "坠积性肺炎", "泌尿系统感染", "消化道出血", "电解质紊乱", "多器官功能衰竭"]
    const tips2 = ["低分子肝素钙注射液 4100IU 皮下注射 q12h", "华法林钠片 3mg 口服 qd", "利伐沙班片 10mg 口服 qd", "肢体气压治疗 bid", "床上踝泵运动 30次/组 tid", "凝血功能检测 q3d", "下肢静脉超声复查 qw", "穿戴梯度压力袜", "抬高下肢20-30°", "避免下肢静脉穿刺", "每日饮水>2000ml", "早期床边坐起", "神经肌肉电刺激", "D-二聚体动态监测", "抗凝药物剂量调整", "预防性抗凝疗程14天", "观察出血倾向", "避免同时使用NSAIDs", "定期评估血栓风险", "康复科会诊制定运动处方"]
    const tips3 = ["肠内营养液 500ml 鼻胃管注入 qd", "肠外营养液 1440ml 中心静脉输注 qd", "蛋白质粉 20g 口服 bid", "复合维生素片 1片 口服 qd", "血清白蛋白检测 biw", "上臂围测量 qw", "24小时出入量记录", "营养师会诊调整热量", "少量多餐 6次/日", "避免高糖高脂饮食", "定期监测前白蛋白", "补充ω-3脂肪酸", "经皮胃造瘘术评估", "吞咽功能训练", "床头抬高30°防反流", "营养支持疗程2周", "观察胃肠道耐受性", "每日热量目标25kcal/kg", "蛋白质目标1.5g/kg", "康复期营养教育"]
    const tips4 = ["胰岛素注射液 6IU 皮下注射 tid", "二甲双胍片 500mg 口服 bid", "血糖监测 qid（三餐前+睡前）", "糖尿病饮食 控制总热量", "无糖饮食 避免甜食", "碳水化合物计数法", "血糖仪居家监测", "内分泌科会诊调整方案", "糖化血红蛋白检测 q3m", "警惕低血糖症状", "运动前后血糖监测", "胰岛素剂量个体化", "口服降糖药时程", "饮食日记记录", "血糖波动原因分析", "动态血糖监测评估", "避免空腹运动", "睡前加餐防夜间低血糖", "定期评估胰岛功能", "糖尿病足筛查"]
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
            "dDimer": generate_random_number(id, 1, 3, 12)[0] / 10,
            "dDimerSuggestions": generate_random_number(id + 1, 3, 0, 19).map(i => tips2[i]),
            "nutritionScore": generate_random_number(id, 1, 0, 6)[0],
            "nutritionSuggestions": generate_random_number(id + 2, 3, 0, 19).map(i => tips3[i]),
            "bloodSugar": generate_random_number(id, 1, 50, 120)[0] / 10,
            "bloodSugarSuggestions": generate_random_number(id + 3, 3, 0, 19).map(i => tips4[i]),
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
    event_graph,
    graph_3_nodes_data
}