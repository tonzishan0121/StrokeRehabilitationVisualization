const ip_address = process.env.VUE_APP_API_HOST || "http://127.0.0.1:8000/api/v1";


/**
 * 发起HTTP请求，并通过回调函数返回响应结果
 * @param {string} url 请求的URL
 * @param {function} callback 回调函数
 */
export const requestf = async (url, callback) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  const id = localStorage.getItem("id");
  fetch(ip_address+"/"+apiConfig[url]+"/"+id, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((result) => callback(result))
    .catch((error) => console.error(error));
};
const apiConfig = {
  11:'patients',
  12:'vital_signs',
  13:'daily_assessments',
  14:'blood_pressure_monitor',
  15:'weekly_assessments',
  21:'rehabilitation_pathways/patient',
  22:'rehabilitation_plan_details/patient',
  31:'patients',
  32:'physiological_risks/patient'
};