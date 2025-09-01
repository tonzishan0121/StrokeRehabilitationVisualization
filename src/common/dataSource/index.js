const seedrandom = require('seedrandom');
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


const week_3_zhibiao = (id) => {
    return {
        "heartRate": generate_random_number(id, 7, 140, 180),
        "systolicPressure": generate_random_number(id, 7, 70, 100),
        "diastolicPressure": generate_random_number(id, 7, 60, 100)
    }
}

