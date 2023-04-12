<template>
    <ul>
        <li v-for="(item,index) in items" :key="index">
          <slot name="item" v-bind="item"></slot>
        </li>
      </ul>
</template>
<script setup>
import { reactive } from "vue";
    const items = reactive([{}])
</script>