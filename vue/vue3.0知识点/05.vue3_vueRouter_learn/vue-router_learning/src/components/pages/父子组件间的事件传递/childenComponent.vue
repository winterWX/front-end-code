<template>
    <div class="children">
        <div>显示父组件传递过来的参数{{data}}</div>
        <button @click="childeProps">子传父</button>
    </div>
</template>

<script>
export default {
    name: 'childenComponent',
    emits:['childrenClick'],
    props:{
      data:{
        type: Number
      }
    },
    setup(props,{emit}){
        const childeProps = ()=>{
            emit('childrenClick', {num:100} )
        }
        return{
            childeProps
        }
    }
};
</script>

<style lang="less" scoped>

    .children{
        display: flex;
        justify-content: center;
    }

</style>