<template>
  <input v-model="text" />
</template>

<script lang='ts' setup>
import { useDebouncedRef } from './useDebouncedRef'
const text = useDebouncedRef('hello')
</script>