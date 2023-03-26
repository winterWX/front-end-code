# watch 和 watchEffect 的区别

watch {
    1.懒执行副作用
    2.更加明确是由那个状态触发侦听器重新执行的
    3.可以访问侦听器的前一个值和当前值

    watch 有三个参数：{
        1.侦听的值
        2.副作用函数
        3.刷新机制: {deep, immediate, flush:{post,pre, sync}}
    }
}

watchEffect:{
    1.自动会收集响应式状态，然后执行副作用函数
    2.接收两个参数
    watchEffect((callback)=>{
      callback() // 清除副作用
    },{
        flush：pre  // 默认行为，状态改变后，组件刷新之前执行
        flush: post  // 状态改变后，组件刷新之后执行
        flush: sync //  状态改变后，立即执行
    })
}
