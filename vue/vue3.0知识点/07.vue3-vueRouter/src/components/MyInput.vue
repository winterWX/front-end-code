<script setup>
import { useAttrs, useSlots, ref, onMounted, reactive } from 'vue';
const inp = ref(null)
const inputCallback = {} 
const attrs = useAttrs()
const slotArr = useSlots()
onMounted(() => {
    const enterArr = Object.entries(inp.value)
    for (let [key, value] of enterArr) {
        inputCallback[key] = value
    }
    console.log('inputCallback', inputCallback)
})
defineExpose({ inputCallback })
</script>

<template>
<div class="main">
    <el-input ref="inp" v-bind="attrs" >
        <template v-for="(value, name) in slotArr" #[name]="slotData">
           <slot :name='name' v-bind="slotData || {}"></slot>
        </template>
    </el-input>
</div>
</template>
<style>
.main{
    height:  20px;
}
</style>