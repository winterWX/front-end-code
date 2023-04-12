<template>
    <FancyList :api-url="url" :per-page="10">
        <template #item="{ body, username, likes }">
          <div class="item">
            <p>{{ body }}</p>
            <p>by {{ username }} | {{ likes }} likes</p>
          </div>
        </template>
      </FancyList>
</template>

<script setup>
    import FancyList from './list.vue'
</script>


<!-- 子组件将内容交给父组件，父组件来控制内容和样式 -->