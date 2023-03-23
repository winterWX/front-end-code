import { reactive } from 'vue';
<template>
    <div>
        计算属性的变化: {{ computedVal }}
        <button @click="changeComputed()">点击按钮</button>
    </div>
</template>

<script setup>
    import { reactive, computed} from 'vue';
    const data = reactive({num: 20,num2: 40})
    
    const computedVal = computed(()=>  data.num + data.num2 )  // 返回一个 ref,但是只是只读属性
  
    console.log('computedVal',computedVal)

    // 不能进行修改
    const changeComputed = ()=>{
        computedVal.value ++
    }
    
    
</script>