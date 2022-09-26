import service from "./service";
import qs from "qs";

export function commonRequest(params) {
    let { url,method,data } = params;
    method = method.toUpperCase();
    let _data = null,_url= "";
    if(method === 'GET'){
      _data = qs.stringify(data,{ indices: false });
      _url = url+"?"+_data;
    }else{
      _data = data;
    }
    return service({
      url: _url,
      method: method,
      data: method === 'POST'?_data:null,
      params: method === 'GET'?_data:null
    });
}