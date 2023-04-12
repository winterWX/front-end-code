<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// 知识点测试部分
// import userModelComponent from './views/vue知识点测试部分/1.v-model的用法/2.在组件上使用v-model/index.vue'
import useAttrsComponent from './views/vue知识点测试部分/2.透传属性用法/index.vue'
import useMouseMove from './views/vue知识点测试部分/3.封装鼠标移动事件/1.方式一.vue'
import useMouseMoveTwo from './views/vue知识点测试部分/3.封装鼠标移动事件/2.方式二/index.vue'

import { ref } from 'vue'
// 控制路由方式和单页面方式
const isShow = ref(false)
isShow.value = true
</script>

<template>
  <template v-if="!isShow">
    <!-- <userModelComponent /> -->
    <!-- <useAttrsComponent></useAttrsComponent> -->
    <!-- <useMouseMove></useMouseMove> -->
    <useMouseMoveTwo></useMouseMoveTwo>
  </template>
  
  <template v-else>
    <header>
      <!-- <div class="wrapper"> -->
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/content/34">content</RouterLink>
          <RouterLink to="/virtualList">长列表</RouterLink>
        </nav>
      <!-- </div> -->
    </header>
     
    <!-- 路由匹配到的会渲染到这里 -->
    <RouterView />
  </template>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
