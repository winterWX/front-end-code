import axios from 'axios';
import { requestGet } from '.';

// 声明一个数组用于存储每个请求的标识
const requestClearList = new Map()

// 创建一个独立的axios实例
const service = axios.create({
     // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
     // baseURL: '',
     // 定义统一的请求头部
     // headers: {
     //      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
     // },
     // 配置请求超时时间
     timeout: 10000,
     // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
     // withCredentials: true
});
// 请求拦截
service.interceptors.request.use(config => {
     // 清除
     let storageControl = requestClearList.get(config.url)
     if(storageControl){
          storageControl.abort()
          requestClearList.delete(config.url)
     }
     const control = new AbortController()
     config.signal = control.signal
     requestClearList.set(config.url, control)
     return config;
},error=>{
     pendingArray = []; //清空记录——这里出现错误可能是网络波动造成的，清空 pending 对象
     return Promise.reject(error);
});
// 返回拦截
service.interceptors.response.use(response => {
     // 获取接口返回结果
     console.log('res------', res);
     const res = response.data;
     if(response){
          // 清除当前记录
          removePending(response.config);
          if (res.code === 200) {
               return res;
          } else if (res.code === 10000) {
               return res;
          } else {
               return res;
          }
     }

}, (error) => {
     pending = [];//清空记录
     console.log('网络请求异常，请稍后重试!', error);
});

function request(url, params, method) {
     return new Promise((resolve, reject) => {
          let data = {}
          if (method == 'GET') data = { params }
          if (method == 'POST') data = { data: params }
          console.log('service==========', url, params, method, service)
          service({
               url,
               method,
               ...data
          }).then(res => {
               if (res.status === 0) {
                    resolve(res.data);
               } else {
                    reject(res);
               }
          }).catch(() => {
               
          })
     })
}
// 封装GET请求
function requestGet(url, params) {
     return request(url, params, 'GET')
}
// 封装POST请求
function requestPost(url, params) {
     return request(url, params, 'POST')
}
export {
     requestGet,
     requestPost
}
