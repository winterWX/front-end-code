/**
 * 1.首先要遵循同源策略 --- 否则会造成跨域
 *   协议相同
 *   域名相同
 *   端口相同
 *
 *   同源策略的目的： 保证用户信息安全，防止恶意网站窃取数据。同源策略是必须的，否则cookie可以共享
*/

// ----- 方案一 ----

/**
  *  JSONP (json with padding)
  *  1.JSONP由回调函数和数据构成。
  *  2.通过script标签引入一个js文件，
  *    这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。
  *
  *
  *  优点：兼容性好，支持更低版本的浏览器
  *  缺点：只支持get请求，不支持post等其他类型的HTTP请求
  *
*/

// ----- 解决方案二 -----

/** CORS
 *
 *  1.跨域资源共享时, 定义了浏览器和服务器的沟通方式,
 *    通过自定义的HTTP头部让浏览器和服务器进行沟通,从而决定响应的成功或者失败。
 *    主要通过设置Access-Control-Allow-Origin来进行的
 *
 *    //指定允许其他域名访问
 *    Access-control-allow-origin: * 或者 域名
 *    //响应类型
 *    Access-control-allow-Methods: GET/POST
 *    //响应头的设置
 *    Access-control-allow-Headers: x-requested-with,content-type
 *
*/


// ----- 解决方案三 ------

/**
 *  通过Web Socket 进行跨域
 * 
 *  浏览器想升级webSocket协议
 *  会在请求头里加 connection: upgrade
 *  upgrade: websocket
 *  sec-websocket-key
 * 
 *  1. web Socket是一种浏览器的API
 *     原理是 在js创建了web socket之后,会有一个HTTP请求发送到服务器以发起连接，取得服务器的
 *     响应后，建立的连接会使用HTTP升级从HTTP协议交换为 web socket
 * 
 *     var socket = new WebSocket('ws://www.baidu.com'); //http->ws; https->wss
 *          socket.send('hello WebSocket');
 *          socket.onmessage = function(event){
 *              var data = event.data;
 *     }
 * 
*/

/***
  * 
  *  解决方案四
  * 
  *  使用nginx 反向代理
  * 
  *  1.下载nginx,搭建一个中转 Nginx 服务器，用于转发请求。
  *  2.在nginx.conf配置文件里，配置多个前缀来转发http/https,请求到多个真实的服务器即可。
  *    这个服务器上所有url都是相同的域 名、协议和端口。因此，对于浏览器来说，
  *    这些url都是同源的，没有跨域限制。而实际上，这些url实际上由物理服务器提供服务。
  *    这些服务器内的 javascript可以跨域调用所有这些服务器上的url。
  *
*/
