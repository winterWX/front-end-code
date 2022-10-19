<template>
    <input v-num.trim="3"  value="10000000" />
</template>
    
<script lang='ts'>
	import { ref,onMounted } from 'vue';
	export default{
		setup(){
		},
        directives:{
            num:{
                created() {
                    
                },
                mounted(el,bindings) {
                    let select = bindings.value;
                    let value = String(el.value).split('').reverse().reduce((pre, next, index) => {
                        console.log('===',index % select);
                        console.log((index % select) ? (next + "" + pre) : (next + ',' + pre))
                        return (index % select) ? (next + "" + pre) : (next + ',' + pre);
                    })
                    el.value = value;
                    console.log('value的值',value)
                }
            }
        }
	}
</script>
    
<style>
    
</style>