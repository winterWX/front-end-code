<script setup>
import { ref, onMounted } from 'vue';
import MyInput from '../components/MyInput.vue'
let inputVal = ref('')
let inputRef = ref(null)
onMounted(()=>{  
    inputRef.value.inputCallback.focus()
})
</script>

<template>
    <My-input ref="inputRef" v-model="inputVal" placeholder="Please input" clearable >
        <template #prepend>
            <el-select placeholder="Select">
                <el-option label="三国演义" value="1"></el-option>
                <el-option label="西游记" value="2"></el-option>
                <el-option label="水浒传" value="3"></el-option>
            </el-select>
        </template>
        <template #append>
            <el-button :icon="Search"></el-button>
        </template>
    </My-input>
</template> 
