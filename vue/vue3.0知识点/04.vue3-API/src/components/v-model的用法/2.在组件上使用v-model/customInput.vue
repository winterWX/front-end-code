<script setup>
  import { defineProps,defineEmit} from 'vue'
  defineProps(['modelValue'])
  defineEmit(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>