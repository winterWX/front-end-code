import axios from 'axios';

// 声明一个数组用于存储每个请求的标识
const pendingArray = [];
const cancelToken = axios.cancelToken;
const removePending = (config)=>{
    //查找数组中是否存在相同请求，存在则取消
    for(let item in pendingArray){ 
     if(pendingArray[item].u === config.url.split('?')[0] + '&' + config.method) {
          pendingArray[item].f(); //执行取消操作
          pendingArray.splice(item, 1); //数组移除当前请求
     }
   }
}


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
     //config.headers.token = 'token';
     console.log('config-----', config);

     removePending(config); //在一个axios发送前执行校验取消操作
     // pendingArray存放每一次请求的标识，config.url请求路径，config.params参数，config.method请求方法
     config.cancelToken = new cancelToken((c)=>{
          pendingArray.push({ u: config.url.split('?')[0] +'&' + config.method, f: c});
     })
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
