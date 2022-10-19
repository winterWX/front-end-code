
<template>
    <div>{{ sonData }}</div>
</template>

<script lang="ts">

    import { ref, reactive,onMounted,computed,watch} from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup(){
            let store = useStore();
            let sonData = computed(()=> store.state.computedUse.paramsNum);
            let numData = ref(0);
            let numParams = reactive({
                data: 20
            });

            watch(numData,(newVal,oldVal)=>{

            },{deep: true,immediate:true});

            watch(()=>numParams.data,(newVal,oldVal)=>{

            },{deep: true,immediate:true});

            return {
                sonData,
                numData    
            }
        }
    }

</script>
