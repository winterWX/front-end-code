<template>
    <div>
        effectScope 的使用方式
    </div>
  </template>

<script lang='ts' setup>
  import { ref, computed, watch ,watchEffect} from 'vue'
  /**
   *  effectScope 创建effect作用域，可以捕获其中创建的所有响应式属性的，捕获到一起处理副作用
   * 
   *  getCurrentScope: 如果有当前副作用域时，返回副作用域
   * 
   *  onScopeDispose: 在当前活跃effect作用域上注册一个函数，当effect停止时调用这个注册的函数，在组合函数
   * 中可以替代onUnmount，处理一些逻辑
   * 
  */
  const scopeFn  = effectScope() 
  let counter = ref(1)
  scopeFn.run(() => {
    const doubled = computed(() => counter.value * 2)

    watch(doubled, () => console.log(doubled.value))

    watchEffect(() => console.log('Count: ', doubled.value))
  })

  // 处理掉当前作用域内的所有 effect
  scopeFn.stop()
</script>