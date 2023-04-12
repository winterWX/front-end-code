<script lang="ts">
    import { defineComponent, ref } from 'vue'
    const appComponent = defineComponent({
        setup(){
            const counter = ref(0)
            const counterChange = ()=>{
                counter.value ++
            }
            return {
                counter,
                counterChange
            }
        }
    })
    appComponent.created = function(){
        console.log('===222')
        this.init()
    }
    export default appComponent
</script>
<template>
    <div class="content">
        <div>defineComponent定义组件方式二 {{counter}}</div>
        <button @click="counterChange()">方式二点击</button>
    </div>
</template>

<style>
    .content{
        align-items: center;
        justify-content: center;    
        display: flex;
    }
</style>