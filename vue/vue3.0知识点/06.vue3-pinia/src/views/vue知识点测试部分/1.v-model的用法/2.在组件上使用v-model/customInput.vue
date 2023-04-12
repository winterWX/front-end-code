<script setup>
  const props = defineProps(['modelValue'])  //modelValue 会拿到input的值
  defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>