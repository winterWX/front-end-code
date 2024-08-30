# WebSocket
  - 概念：websocket是html5提供的一种浏览器和服务器进行双工通讯的网络技术，属于应用层协议，它是基于tcp传输协议，并复用HTTP的握手通道。
  # 优点
    - 1.支持双向通信，实时性更强
    - 2.更好的二进制支持
    - 3.有较小的控制开销
    - 4.支持扩展

    # 使用流程
      - 首先浏览器会向服务器发送一个Http请求，使用get方式
      - 请求头的信息包含
        - Connection: Upgrade：表示要升级协议
        - Upgrade: websocket：表示要升级到websocket协议。
        - Sec-WebSocket-Version: 13：表示websocket的版本。如果服务端不支持该版本，需要返回一个Sec-WebSocket-Versionheader，里面包含服务端支持的版本号。
        - Sec-WebSocket-Key：与后面服务端响应首部的Sec-WebSocket-Accept是配套的，提供基本的防护，比如恶意的连接，或者无意的连接。
      - 服务器相应
        - HTTP/1.1 101 Switching Protocols   // 101 表示协议替换成功
        - Connection:Upgrade
        - Upgrade: websocket
        - Sec-WebSocket-Accept: Oy4NRAQ13jhfONC7bP8dTKb4PTU=
    # 代码流程
       `const socket = new webSocket(url)`
       `socket.onopen = function(){ console.log('表示建立成功')}`
       `socket.onmessage = function(e){ console.log('接收到传递过来的消息')}`
       `socket.onclose = function(){console.log('关闭成功')}`

       `socket.send('主动发消息')`
       `socket.readyState 返回状态    1 表示正在连接  2 表示连接成功  3 表示已经关闭成功`




