<template>
  <div class="">监听总线程的事件</div>
  <div>传递过来的参数{{ counter }}</div>
</template>

<script>
  import Bus from '../../../utils/eventBus'
import { onMounted, onUnmounted, ref} from 'vue';
  export default {

    name:'about', 
    setup(props) {
        let counter = ref(0);
        onMounted(()=>{
            Bus.on('paramsNum',(n)=>{
              counter.value = n.num
            })
        })
  
        onUnmounted(()=>{
            Bus.all.clear()
        })

        return { counter }
    }

  }
</script>