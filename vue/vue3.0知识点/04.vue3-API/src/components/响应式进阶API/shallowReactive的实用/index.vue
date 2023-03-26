<template>
    <div>shallowReactive 的使用</div>
</template>

<script lang="ts" setup>
import { shallowReactive,isReactive } from 'vue'
    const state = shallowReactive({
    foo: 1,
    nested: {
        bar: 2
    }
    })

    // 更改状态自身的属性是响应式的
    state.foo++

    // ...但下层嵌套对象不会被转为响应式
    isReactive(state.nested) // false

    // 不是响应式的
    state.nested.bar++

</script>