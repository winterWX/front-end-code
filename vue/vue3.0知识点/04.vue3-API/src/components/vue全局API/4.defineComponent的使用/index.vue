<template>
    <div>
        <h1>defineComponent 的使用</h1>
        <div>----------------------</div>
        <My-app-Component></My-app-Component>
        <my-app-component-seconed></my-app-component-seconed>
    </div>
</template>

<script setup>
    import MyAppComponent from './1.定义组件方式一.vue'
    import MyAppComponentSeconed from './2.定义组件方式二.vue'
</script>


<!-- defineComponent

1.可以传递optionAPI的形式或者组合API的形式
2.ts文件格式下定义组件，可以给予正确的类型推导
3.可以返回一个合成类型的构造函数，在对象可以追加钩子函数 -->