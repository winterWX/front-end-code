// hash:{
//    1. url中会存在#号, 用来指导浏览器的动作，请求时不会包含#。
//    2. hash的兼容性好, 每次#后面的hash值变了，浏览器的历史栈里会添加一条记录
//    3. hash多次刷新同一个页面，记录只会添加一次
//    4. hash模式无需后端配置
// }

// history:{
//    1. history url里不会存在#
//    2. 当资源页面匹配不到时，需要后端配置匹配不到的资源页面
//    3. 借助history API 的方法实现的,pushState, replaceState,popState,go,forward,back等方法
// }