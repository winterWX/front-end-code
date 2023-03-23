<template>
    <div class="div_code">1111</div>
</template>
<script lang="ts" setup>

</script>

<!-- 1.深度选择器 -->
<!-- 2.插槽选择器 -->
<!-- 3.全局选择器 -->
<style scoped>
.div_code :deep(.p){ 
   color: blue;
}

:slotted(div) {
  color: red;
}

:global(.red) {
    color: red;
}
</style>