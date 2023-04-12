import { inspectOpts } from '@vitejs/plugin-vue';
<template>
    <div>
        <h1>defineCustomElement 的使用</h1>
        <div>----------------------</div>
        <my-app-Component></my-app-Component>
    </div>
</template>

<script setup>
    import { defineCustomElement } from 'vue'
    const testComponent = defineCustomElement({
        date(){
            return {
            counter: 0
            }
        },
        template: `<div>111${counter}</div>`
    })
    
    // 方式一 进行注册
    customElements.define('my-app-Component', testComponent)  // 就会当作一个普通的标签使用

    // 将注册好的标签创建标签元素
    const el = document.createElement('my-app-Component')
    document.body.appendChild(el)
</script>


<!-- defineCustomElement -->
<!-- 
    1. 函数调用传递对象 option类型， 返回一个原生的自定义元素
    2. 元素可以用于任意框架或者不基于框架
    3. 对象里的事件都是可用的
 -->