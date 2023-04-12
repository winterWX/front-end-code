<template>
    <div>
        <span>我是异步组件{{numTest}}</span>
    </div>
</template>

<script>
import { ref } from 'vue'
 export default {
    setup(props,context){
        const numTest = ref(0)
        const { expose } = context
        expose({ numTest })
        return { numTest }
    }
}

</script>