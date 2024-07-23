/**
 *  创建ajax的过程
 * 
 *  1. 创建xhr对象：new XMLHttpRequest();
 *  2. 设置请求的参数：request.open(method,服务器接口地址);
 *  3. 发送请求：request.send() // 如果是get请求就不需要配置参数，post需要传递参数 request.send(data)。
 * 
 *  readyState:{
 *      0：初始化,XHR对象已经创建,还未执行open
 *      1：载入,已经调用open方法,但是还没发送请求
 *      2：载入完成,请求已经发送完成
 *      3：交互,可以接收到部分数据
 *      4：数据全部返回
 *  }
 *   
 *  status:{
 *       200: 请求成功
 *       404: 没有发现文件，查询或URL
 *       500: 服务器错误
 *  }
 * 
*/
 
function  ajaxSend(){
      const xhr = new XMLHttpRequest();
      xhr.open('get','url')
      xhr.send();
      xhr.onreadystatechange = function(res){
          if(res.readyState === 4 && res.status === 200){
                console.log(res.responseText)
               //进行操作
          }
      }
}

/**
 *  ajax 的 封装
 * 
 */
 function Ajax(type, url, data, success, failed) {
        // 创建ajax对象
        var xhr = null;
        if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
    
        var type = type.toUpperCase();
        // 用于清除缓存
        var random = Math.random();
    
        if (typeof data == 'object') {
            var str = '';
            for (var key in data) {
                str += key + '=' + data[key] + '&';
            }
            data = str.replace(/&$/, '');
        }
        if (type == 'GET') {
            if (data) {
                xhr.open('GET', url + '?' + data, true);
            } else {
                xhr.open('GET', url + '?t=' + random, true);
            }
            xhr.send();
    } else if (type == 'POST') {
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
  
    // 处理返回数据
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
          if (failed) {
            failed(xhr.status);
          }
        }
      }
    }
  }