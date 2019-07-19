//定义公共请求配置部分
import axios from "axios"
const baseURL = location.host.indexOf(".com") != -1 ? "" : "/apis";
var instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  // 跨域  
  withCredentials: true,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  transformRequest: [function (data) {
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    return data;
  }],
  responseType: 'json'
})
export default instance



















