const ip_address = "http://127.0.0.1:4523/m1/4229826-0-default";


/**
 * 发起HTTP请求，并通过回调函数返回响应结果
 * 
 * @param {string} url - 请求的目标URL地址
 * @param {Object} data - 需要发送的请求数据（会被转换为JSON字符串）
 * @param {string} method - HTTP请求方法（GET/POST/PUT/DELETE等）
 * @param {Function} callback - 成功响应后的回调函数，接收解析后的响应结果作为参数
 * 
 * @note 该请求默认携带以下请求头：
 * - User-Agent标识为Apifox客户端
 * - Content-Type设置为application/json
 * - 接受所有类型的响应内容
 * - 保持持久连接
 */
export const requestf = (url, data, method, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Host", "127.0.0.1:4523");
  myHeaders.append("Connection", "keep-alive");

  var raw = JSON.stringify(data);

  var requestOptions = {
      method: method,
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  fetch(url, requestOptions)
      .then(response => response.json()) 
      .then(result => callback(result))
      .catch(error => console.log('error', error));
  };
export const apiConfig = {
  // 获取病人信息
  getInfo: `${ip_address}/info`,
  // 获取九个基本生理数据
  getVitals: `${ip_address}/vitals`,
  // 获取当天康复量表得分
  getScore: `${ip_address}/score`,
  // 获取血压与心率
  getBloodPressure: `${ip_address}/bloodPressure`,
  // 获取一周康复量表的总表
  getscoreList: `${ip_address}/scoreList`,
  //获取指定日期康复方案
  getRehab: `${ip_address}/rehabs`,
  //获取康复路径
  getPath: `${ip_address}/pathway`,
  //病人详细个人信息
  patientInfo: `${ip_address}/patientInfo`,
  //病人详细生理数据
  patientData:  `${ip_address}/patientData`,
  //事件路径
  eventRoute: `${ip_address}/eventRoute`,
  //测试
  test: (id) => `${ip_address}/api/${id}/json`,
  //排班表
  timetables: `${ip_address}/timetables`,
};