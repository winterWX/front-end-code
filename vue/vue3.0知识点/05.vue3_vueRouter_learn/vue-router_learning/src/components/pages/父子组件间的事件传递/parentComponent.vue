<template>
    <div>
        <childenComponent :data="data" @childrenClick='chilClick'/>
        <br/>
        <div>接收子组件传递过来的参数{{childrenNum}}</div>
    </div>
</template>

<script>
import {ref} from 'vue';
import childenComponent from './childenComponent.vue';

export default {
    name: 'ParentComponent',
    components:{
        childenComponent
    },
    setup(){
       let data = ref(20);
       let childrenNum = ref(null);
       const chilClick=(item)=>{
            childrenNum.value = item.num
       }
       return{
           data,
           childrenNum,
           chilClick
       }
    }
};
</script>

<style lang="less" scoped>

</style>