lodash.debounce 函数  

# 防抖
就是当事件触发后，等待一定的时间后在进行事件的处理， 当重新触发后，开始重新计算时间

应用场景：
1. 输入框输入内容，进行信息查询
2. 点击按钮进行查询
3. 浏览器滚动事件
4. 用户窗口的伸缩事件resize

# 节流
在固定的时间段，不管事件被触发了多少次，只进行一次事件处理，
处理完，重新开始计时

使用场景：
1.按钮的点击事件
2.游戏中的事件触发
3.浏览器的滚动事件


第三方库， lodash, underscore

underscore.debounce
underscore.throttle  