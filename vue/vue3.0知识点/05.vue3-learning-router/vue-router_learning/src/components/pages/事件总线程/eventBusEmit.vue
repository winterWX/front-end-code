<template>
    <div>
        <button @click="emitClick">触发emit事件</button>
    </div>
    <event-bus-off />
</template>

<script>
import Bus from '../../../utils/eventBus';
import eventBusOff from './eventBusOnOff.vue'
export default {
    name: 'eventBusEmit',
    components:{
        eventBusOff
    },
    setup(props,{emit}){
      const emitClick = ()=>{
        Bus.emit('paramsNum',{num : 1000})
      }
      return{
          emitClick
      }
    }
};
</script>

<style lang="less" scoped>

</style>