import service from "./service";
import qs from "qs";

export function commonRequest(params) {
    let { url,method,data,isParams=false, } = params;
    method = method.toUpperCase();
    let _data = data,_url= url,key = null;
    if(method === 'GET'){
      if(!isParams){
        _data = qs.stringify(data,{ indices: false });
        _url = url+"?"+_data;
        key = null;
      }else{
        key = 'params';
      }
    }else{
      key = 'data';
    }
    let pData = key?{
      [key]:_data,
    }:null;
    return service({
      url: _url,
      method: method,
      pData
    });
}

export function Request(args) {
  return new Promise((resolve, reject) => {
    commonRequest({ ...args })
      .then((res) => {
        if (res.data.code === 0) {
          resolve(res.data.data);
        } else {
          // ElMessage({
          //   type: "error",
          //   message: "返回失败：" + res.data.ErrorMsg,
          // });
          reject();
        }
      })
      .catch((error) => {
        // ElMessage({
        //   type: "error",
        //   message: error,
        // });
        reject(error);
      });
  });
}