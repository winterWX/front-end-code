<!-- props 和 attrs/useAttrs

1.都可以做到属性传递
2.props声明过的属性不会出现在attrs里
3.props不包含事件,attrs包含事件
4.props支持string以外类型，attrs只是支持string -->

<script setup>
  import { useAttrs } from 'vue'
  defineProps(['title'])
  console.log('useAttrs====', useAttrs())
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>