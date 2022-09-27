import axios from "axios";
// import {  ElMessage } from "element-plus";

const service = axios.create({
  // baseURL:  process.env.REACT_APP_BASE_URL,
  baseURL: "/",
  timeout: 30000,
});
service.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem("Token");
    config.headers = { 
        // Authorization: `Bearer ${auth.getToken()}`,
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    let code = error.code;
    let msg = "";
    // eslint-disable-next-line default-case
    switch(code){
      case 400:
        msg = "请求参数错误~";
        break;
      case 405:
        msg = "请求方式错误~";
        break;
      case 502:
        msg = "网关错误~";
        break;
      case 504:
        msg = "网络超时,请稍候再试~";
        break;
    }
    // ElMessage({
    //   type:"error",
    //   message:msg
    // })
    return Promise.reject(error);
  }
);

export default service;
